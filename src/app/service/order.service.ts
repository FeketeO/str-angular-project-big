import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orderUrl: string = 'http://localhost:3000/orders';
  list$: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>([]);

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): void {
    this.http.get<Order[]>(this.orderUrl).subscribe(
      data => this.list$.next(data)
      // error=>this.showError()
    )
  }

  getAllsum(): Observable<Order[]> {
    return this.http.get<Order[]>(this.orderUrl);    
  }  
  
  get(id: number | string): Observable<Order> {
    id = typeof id === 'string' ? parseInt(id, 10) : id;
    if (id !== 0) {
      return this.http.get<Order>(`${this.orderUrl}/${id}`);
    }
    return of(new Order())
  }

  create(order: Order): void {
    this.http.post<Order>(
      `${this.orderUrl}`, order).subscribe(
        () => this.getAll()
      );
  }

  update(order: Order): void {
    this.http.patch<Order>(
      `${this.orderUrl}/${order.id}`, order).subscribe(
        () => this.getAll()
      );
  }

  remove(order: Order): void {
    this.http.delete<Order>(
      `${this.orderUrl}/${order.id}`).subscribe(
        () => this.getAll()
      );
  }

  /* showError(): void {
    this.toastr.error('Something is wrong', 'Error', {
      timeOut: 3000,
    });
  } */
}
