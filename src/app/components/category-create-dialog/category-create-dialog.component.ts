import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category-create-dialog',
  templateUrl: './category-create-dialog.component.html',
  styleUrls: ['./category-create-dialog.component.css']
})
export class CategoryCreateDialogComponent {
  formData : FormGroup;
  hasFile : boolean = false;
  eventFile : any;
  id : string;
  constructor(
    private formBuilder : FormBuilder,
    private categoryService : CategoriesService,
    private router : Router,
    private dialog : MatDialog
  ){
    this.formData = this.formBuilder.group({
      name  : ['', [Validators.email]],
    })
  }

  createCategory(){
    this.categoryService.post(this.formData.value).subscribe(data => {
      this.id = data.id.toString();
      window.location.reload()
    })
  }
}
