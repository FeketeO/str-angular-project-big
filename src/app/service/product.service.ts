import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl:string=`http://localhost:3000/products`;
  constructor(
    private http:HttpClient,
  ) { }

 list$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

 list2$:Observable<Product[]>=this.getAllsum();

 getAllsum(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
    
  }
 

 getAll(): void {
    this.http.get<Product[]>(this.apiUrl).subscribe(
      data => this.list$.next(data)
    )
  }

  get(id: number | string): Observable<Product> {
   id = typeof id === 'string' ? parseInt(id, 10) : id;
   if (id!=0){
    return  this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
  return of(new Product())
    }


   create(product:Product):void {
  this.http.post<Product>(
    `${this.apiUrl}`,
    product
    ).subscribe(
      () =>this.getAll()
    ); 
   }

    update(product:Product):void {
  this.http.patch<Product>(
    `${this.apiUrl}/${product.id}`,
    product
    ).subscribe(
      () =>this.getAll()
    );
  
}

remove(product:Product):void {
  this.http.delete<Product>(
    `${this.apiUrl}/${product.id}`
    ).subscribe(
      () =>this.getAll()
    );

}
}
