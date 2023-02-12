import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Category from 'src/app/model/category.model';
import Product from 'src/app/model/product.model';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';
import { ProductEditDialogComponent } from '../../components/product-edit-dialog/product-edit-dialog.component';
import { ProductCreateDialogComponent } from '../../components/product-create-dialog/product-create-dialog.component';

@Component({
  selector: 'app-products-creation',
  templateUrl: './products-creation.component.html',
  styleUrls: ['./products-creation.component.css']
})
export class ProductsCreationComponent implements OnInit {
  public products : Product[]
  public categories : Category[]
  public categorySelected : number;
  constructor(
    private router : Router,
    private productsService : ProductsService,
    private categoryService : CategoriesService,
    public dialog: MatDialog
  ){

  }
  ngOnInit(): void {
    this.categoryService.get().subscribe(data => {
      this.categories = data;
      this.categorySelected = this.categories[0].id;
      this.reloadProducts(this.categorySelected.toString());
    })
  }

  reloadProducts(category : string){
    this.productsService.get(`category=${category}`).subscribe(data=> {
      this.products = data;
    })
  }

  editDialog(product : Product){
    const dialogRef = this.dialog.open(ProductEditDialogComponent, {
      data: {product, categories : this.categories},
      height : '80%',
      width : '70%'
    });
  }

  createDialog(){
    const dialogRef = this.dialog.open(ProductCreateDialogComponent, {
      data: {categories : this.categories},
      height : '80%',
      width : '70%'
    });
  }
  
}
