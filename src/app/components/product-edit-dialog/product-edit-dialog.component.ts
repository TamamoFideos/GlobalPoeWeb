import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import Category from 'src/app/model/category.model';
import Product from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';

@Component({
  selector: 'app-product-edit-dialog',
  templateUrl: './product-edit-dialog.component.html',
  styleUrls: ['./product-edit-dialog.component.css']
})
export class ProductEditDialogComponent {
  formData : FormGroup;
  categories : Category[];
  product : Product;
  id : string;
  hasFile : boolean = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {product : Product, categories : Category[]},
    private formBuilder : FormBuilder,
    private productService : ProductsService,
    private router : Router,
    private dialog : MatDialog
  ){
    const product = data.product;
    this.id = product.id.toString();
    this.product = this.data.product;
    if(this.product.image){
      this.hasFile = true;
    }
    this.formData = this.formBuilder.group({
      name  : [product.name, [Validators.email]],
      price  : [product.price, [Validators.required]],
      description  : [product.description, [Validators.required]],
      category  : [product.category_id, [Validators.required]],
    })
    this.categories = this.data.categories;
  }

  updateProduct(){
    this.productService.put('id='+this.id, this.formData.value).subscribe(data => {
      window.location.reload()
    })
  }

  openFileDialog(){
    const dialogRef = this.dialog.open(ImageDialogComponent, {
      data: {url : this.product.image},
      height : '80%',
      width : '70%'
    });
  }
}
