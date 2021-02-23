import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { EditProductComponent } from './page/edit-product/edit-product.component';
import { ProductListComponent } from './page/product-list/product-list.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,
  },
  {
    path:'product',
    component:ProductListComponent,
  },

  {
    path: 'product/:id',
    component: EditProductComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
