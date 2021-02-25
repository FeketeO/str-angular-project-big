import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditOrderComponent } from './page/edit-order/edit-order.component';
import { EditProductComponent } from './page/edit-product/edit-product.component';
import { OrderListComponent } from './page/order-list/order-list.component';
import { ProductListComponent } from './page/product-list/product-list.component';
import { EditBillComponent } from './page/edit-bill/edit-bill.component';
import { BillListComponent } from './page/bill-list/bill-list.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { EditCustomerComponent } from './page/edit-customer/edit-customer.component';
import { CustomerListComponent } from './page/customer-list/customer-list.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
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
  {
    path: 'order',
    component: OrderListComponent,
  },
  {
    path: 'order/:id',
    component: EditOrderComponent,
  },
  {
    path: 'customer',
    component: CustomerListComponent,
  },
  {
    path: 'customer/:id',
    component: EditCustomerComponent,
  },
  {
    path: '**',
    component: ProductListComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
