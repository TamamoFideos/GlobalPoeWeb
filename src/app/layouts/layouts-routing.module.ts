import { NgModule } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  
  {path : 'sites', 
  component : ContainerComponent, 
  children : [
    { path : 'products', component : ProductsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

