import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Bill } from '../model/bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  billUrl: string = `http://localhost:3000/bills`;
  billList$: BehaviorSubject<Bill[]> = new BehaviorSubject<Bill[]>([]);

  constructor(
    private http: HttpClient
  ) { }

  getAll(): void {
    this.http.get<Bill[]>(this.billUrl).subscribe(
      data => this.billList$.next(data)
    )
  }

  get(id: number | string): Observable<Bill> {
    id = typeof id === 'string' ? parseInt(id, 10) : id;
    if (id !== 0) {
      return this.http.get<Bill>(`${this.billUrl}/${id}`);
    }
    return of(new Bill())
  }


  create(bill: Bill): void {
    this.http.post<Bill>(
      `${this.billUrl}`, bill).subscribe(
        () => this.getAll()
      );
  }

  update(bill: Bill): void {
    this.http.patch<Bill>(
      `${this.billUrl}/${bill.id}`, bill).subscribe(
        () => this.getAll()
      );
  }

  remove(bill: Bill): void {
    this.http.delete<Bill>(
      `${this.billUrl}/${bill.id}`).subscribe(
        () => this.getAll()
      );
  }
}
