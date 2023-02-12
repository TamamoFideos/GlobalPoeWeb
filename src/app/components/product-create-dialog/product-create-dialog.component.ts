import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import Category from 'src/app/model/category.model';
import Product from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-product-create-dialog',
  templateUrl: './product-create-dialog.component.html',
  styleUrls: ['./product-create-dialog.component.css']
})
export class ProductCreateDialogComponent {
  formData : FormGroup;
  categories : Category[];
  hasFile : boolean = false;
  eventFile : any;
  id : string;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {categories : Category[]},
    private formBuilder : FormBuilder,
    private productService : ProductsService,
    private uploadService : UploadService,
    private router : Router,
    private dialog : MatDialog
  ){
    
    this.formData = this.formBuilder.group({
      name  : ['', [Validators.email]],
      price  : ['', [Validators.required]],
      description  : ['', [Validators.required]],
      category  : ['', [Validators.required]],
    })
    this.categories = this.data.categories;
  }

  createProduct(){
    this.productService.post(this.formData.value).subscribe(data => {
      this.id = data.id.toString();
      if(this.eventFile){
        this.uploadService.uploadFile(this.eventFile, 'products', 'image', this.id).subscribe(data => {
          window.location.reload()
        })
      }else{
        window.location.reload()
      }
    })
  }

  uploadFile(event : any){
    
  }

  openFileDialog(){
    
    const dialogRef = this.dialog.open(ImageDialogComponent, {
      data: {localFile : this.eventFile.target.files[0]},
      height : '80%',
      width : '70%'
    });
  }

  loadFile(event : any){
    this.eventFile =event;
    this.hasFile=true;
  }
}
