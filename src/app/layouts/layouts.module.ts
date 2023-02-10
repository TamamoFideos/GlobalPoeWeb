import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { ProductsComponent } from './products/products.component';
import { ContainerComponent } from './container/container.component';
import { LayoutRoutingModule } from './layouts-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductsComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    LayoutRoutingModule,

    RouterModule
  ]
})
export class LayoutsModule { }