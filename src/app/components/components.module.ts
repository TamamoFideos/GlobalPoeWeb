import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { ProductEditDialogComponent } from './product-edit-dialog/product-edit-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';
import { SafePipe } from '../pipes/safe.pipe';
import { ProductCreateDialogComponent } from './product-create-dialog/product-create-dialog.component';
import { CategoryCreateDialogComponent } from './category-create-dialog/category-create-dialog.component';
import { CategoryEditDialogComponent } from './category-edit-dialog/category-edit-dialog.component';
import { CartComponent } from './cart/cart.component';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    NavBarComponent,
    ProductEditDialogComponent,
    ImageDialogComponent,
    SafePipe,
    ProductCreateDialogComponent,
    CategoryCreateDialogComponent,
    CategoryEditDialogComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatIconModule
  ],
  exports : [
    NavBarComponent,
    CartComponent
  ]
})
export class ComponentsModule { }
