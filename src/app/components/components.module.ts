import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { ProductEditDialogComponent } from './product-edit-dialog/product-edit-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';
import { SafePipe } from '../pipes/safe.pipe';



@NgModule({
  declarations: [
    NavBarComponent,
    ProductEditDialogComponent,
    ImageDialogComponent,
    SafePipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  exports : [
    NavBarComponent
  ]
})
export class ComponentsModule { }
