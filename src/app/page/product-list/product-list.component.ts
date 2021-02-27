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
 
 
   productList: BehaviorSubject<Product[]>|Observable<Product[]>= this.productService.list$.pipe(
  map((products:Product[])=>products.filter(products=>products)),
  tap(products=>this.productCount=products.length), 
  tap(products=>this.productfilter.count=products.length), 
  
    
     );
 

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




}
