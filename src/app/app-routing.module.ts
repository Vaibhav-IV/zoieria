import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { HomeComponent } from './components/home/home.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ViewProductComponent } from './components/view-product/view-product.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'admin/products', component:AdminProductsComponent}, //here all the crud op will be performed
  {path:':id',component:ViewProductComponent},
  {path:'home/:id',component:ProductPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
