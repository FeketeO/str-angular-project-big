import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  
productList: BehaviorSubject<Product[]> = this.productService.list$;
  constructor(
    private productService: ProductService,
    private router:Router,
  ) { }

  ngOnInit(): void {
     this.productService.getAll();
  }

    onRemove(product:Product):void {
    this.productService.remove(product),
    this.router.navigate([''])
  }
columnKey:string='';
onColumnSelect(key:string):void{
  this.columnKey=key;
}

onChangePhrase(event:any): void{
this.phrase = (event.target as HTMLInputElement).value;
}
phrase:string='';



}
