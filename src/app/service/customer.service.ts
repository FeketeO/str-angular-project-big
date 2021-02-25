import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl:string=`http://localhost:3000/customer`;
  constructor(
    private http:HttpClient,
  ) { }

 list$: BehaviorSubject<Customer[]> = new BehaviorSubject<Customer[]>([]);

 getAll(): void {
    this.http.get<Customer[]>(this.apiUrl).subscribe(
      data => this.list$.next(data)
    )
  }

  get(id: number): Observable<Customer> {
   id = typeof id === 'string' ? parseInt(id, 10) : id;
   if (id!=0){
    return  this.http.get<Customer>(`${this.apiUrl}/${id}`);
  }
  return of(new Customer())
    }

    update(customer:Customer):void {
  this.http.patch<Customer>(
    `${this.apiUrl}/${customer.id}`,
    customer
    ).subscribe(
      () =>this.getAll()
    );

}

remove(customer:Customer):void {
  this.http.delete<Customer>(
    `${this.apiUrl}/${customer.id}`
    ).subscribe(
      () =>this.getAll()
    );

}

create(customer:Customer):void {
  this.http.post<Customer>(
    `${this.apiUrl}`,
    customer
    ).subscribe(
      () =>this.getAll()
    );
   }
}
