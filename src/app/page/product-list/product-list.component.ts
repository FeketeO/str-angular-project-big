import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { groupBy, map, tap, switchMap } from 'rxjs/operators';
import { Product } from 'src/app/model/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
 
 productCount:number=0; 
 productSum:number=0;

 productfilter:{count:number}={count:0}
  sumfilter:{sum:number}={sum:0};
 
 productList: BehaviorSubject<Product[]>| Observable<Product[]>= this.productService.list$.pipe(
   //map(products:Product[]=>products.filter(products=>products)),
   tap(products=>this.productCount=products.length), 
   tap(products=>this.productfilter.count=products.length), 
      
   )
   
   
  summa2:number=0;

  productList2= this.productService.list2$.subscribe(data =>{
      this.summa2 = data
      .map(item=>item.price)
      .reduce((x,y)=>parseInt(''+x)+parseInt(''+y));
    })
  
  
  
 onget():void{
   this.productService.getAll()
 }

  constructor(
    private productService: ProductService,
    private router:Router,
  ) { }


  filterKey: string = 'name';
  filterKeys: string[] = Object.keys(new Product());


  ngOnInit(): void {
     this.productService.getAll();
    //  this.sum();
    //  this.db();
  }

    onRemove(product:Product):void {
    this.productService.remove(product),
    this.router.navigate(['product'])
  }
  irany:boolean=false;
columnKey:string='';
onColumnSelect(key:string):void{
  this.columnKey=key;
  this.irany=!this.irany;
}
phrase:string='';

onChangePhrase(event:any): void{
    this.phrase = (event.target as HTMLInputElement).value;
    

}
//  summa:number=0;
//   darab:any;

  //   sum(): void {
  //   this.productList2.subscribe(data =>{
  //     this.summa = data
  //     .map(item=>item.price)
  //     .reduce((x,y)=>parseInt(''+x)+parseInt(''+y));
  //   })
  // }

  //   sum(): void {
  //   this.productService.getAllsum().subscribe(data =>{
  //     this.summa = data
  //     .map(item=>item.price)
  //     .reduce((x,y)=>parseInt(''+x)+parseInt(''+y));
  //   })
  // }

  // db(): void {
  //   this.productList2.subscribe(data =>{
  //     this.darab = data
  //     .map(item=>item.id)
  //     .length;
  //   })
  // }



}
