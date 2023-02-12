import { NgModule } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { ComputerBuildComponent } from './computer-build/computer-build.component';
import { ProductsCreationComponent } from './products-creation/products-creation.component';
import { AdminGuard } from '../guards/admin.guard';

const routes: Routes = [
  
  {path : 'sites', 
  component : ContainerComponent, 
  children : [
    { path : 'products', component : ProductsComponent},
    { path : 'build', component : ComputerBuildComponent},
    { 
      canActivate : [AdminGuard],
      path : 'product-manager', component : ProductsCreationComponent
    },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

