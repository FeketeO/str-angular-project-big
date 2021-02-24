import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './page/product-list/product-list.component';
import { EditProductComponent } from './page/edit-product/edit-product.component';
import { SorterPipe } from './pipe/sorter.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { EditOrderComponent } from './page/edit-order/edit-order.component';
import { OrderListComponent } from './page/order-list/order-list.component';
import { EditBillComponent } from './page/edit-bill/edit-bill.component';
import { BillListComponent } from './page/bill-list/bill-list.component';
import { CustomerListComponent } from './page/customer-list/customer-list.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    EditProductComponent,
    SorterPipe,
    FilterPipe,
    EditBillComponent,
    BillListComponent,
    EditOrderComponent,
    OrderListComponent,
    CustomerListComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
