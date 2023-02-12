import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { ProductsComponent } from './products/products.component';
import { ContainerComponent } from './container/container.component';
import { LayoutRoutingModule } from './layouts-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { ComputerBuildComponent } from './computer-build/computer-build.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ProductsCreationComponent } from './products-creation/products-creation.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    ProductsComponent,
    ContainerComponent,
    ComputerBuildComponent,
    LoginComponent,
    RegisterComponent,
    ProductsCreationComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    LayoutRoutingModule,
    MatIconModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule
  ]
})
export class LayoutsModule { }
