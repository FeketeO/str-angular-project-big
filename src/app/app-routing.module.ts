import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditProductComponent } from './page/edit-product/edit-product.component';
import { ProductListComponent } from './page/product-list/product-list.component';
import { EditBillComponent } from './page/edit-bill/edit-bill.component';
import { BillListComponent } from './page/bill-list/bill-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
  },
  {
    path: 'product',
    component: ProductListComponent,
  },

  {
    path: 'product/:id',
    component: EditProductComponent,
  },

  {
    path: 'bill',
    component: BillListComponent,
  },
  {
    path: 'bill/:id',
    component: EditBillComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
