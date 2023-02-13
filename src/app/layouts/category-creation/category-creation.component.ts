import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Category from 'src/app/model/category.model';
import Product from 'src/app/model/product.model';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';
import { ProductEditDialogComponent } from '../../components/product-edit-dialog/product-edit-dialog.component';
import { ProductCreateDialogComponent } from '../../components/product-create-dialog/product-create-dialog.component';
import { CategoryEditDialogComponent } from '../../components/category-edit-dialog/category-edit-dialog.component';
import { CategoryCreateDialogComponent } from '../../components/category-create-dialog/category-create-dialog.component';
@Component({
  selector: 'app-category-creation',
  templateUrl: './category-creation.component.html',
  styleUrls: ['./category-creation.component.css']
})
export class CategoryCreationComponent {
  public categories : Category[]
  public categorySelected : number;
  constructor(
    private categoryService : CategoriesService,
    public dialog: MatDialog
  ){

  }
  ngOnInit(): void {
    this.categoryService.get().subscribe(data => {
      this.categories = data;
    })
  }


  editDialog(category : Category){
    const dialogRef = this.dialog.open(CategoryEditDialogComponent, {
      data: {category},
      height : '80%',
      width : '70%'
    });
  }

  createDialog(){
    const dialogRef = this.dialog.open(CategoryCreateDialogComponent, {
      height : '80%',
      width : '70%'
    });
  }
}
