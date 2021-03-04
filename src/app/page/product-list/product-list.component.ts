import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { groupBy, map, tap, switchMap } from 'rxjs/operators';
import { Product } from 'src/app/model/product';
import { ProductService } from '../../service/product.service';
import { ToastrService } from 'ngx-toastr';
import { MytoastrService } from '../../service/mytoastr.service';

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
featuredproduct:number=0;
activeproduct:number=0;

featuredCount():void{
this.productService.getAllsum().subscribe(data=>
  this.featuredproduct=data.filter(item=>item.featured).length)
}
activeCount():void{
this.productService.getAllsum().subscribe(data=>
  this.activeproduct=data.filter(item=>item.active).length)
}


  
   sum(): void {
    this.productService.getAllsum().subscribe(data => {
      this.summa2 = data
        .map(item => item.price)
        .reduce((x, y) => parseInt('' + x) + parseInt('' + y));
    })
  }


onShow():void{
  this.mytoaster.showSuccess()
}

  
 onget():void{
   this.productService.getAll()
 }

  constructor(
    private productService: ProductService,
    private router:Router,
    private toaster: ToastrService,
    private mytoaster: MytoastrService,
  ) { }


  filterKey: string = 'name';
  filterKeys: string[] = Object.keys(new Product());


  ngOnInit(): void {
     this.productService.getAll();
     this.productService.getAllsum();
     this.sum();
     this.featuredCount();
     this.activeCount();
    
  }

    onRemove(product:Product):void {
    this.productService.remove(product),
    this.sum(),
    this.featuredCount(),
    this.activeCount(),
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
    this.sum();
    this.activeCount();
    this.featuredCount();
  
  }

}