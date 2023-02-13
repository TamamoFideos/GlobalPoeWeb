import { Component, Inject } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Category from 'src/app/model/category.model';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-edit-dialog',
  templateUrl: './category-edit-dialog.component.html',
  styleUrls: ['./category-edit-dialog.component.css']
})
export class CategoryEditDialogComponent {
  formData : FormGroup;
  categories : Category[];
  category : Category;
  id : string;
  hasFile : boolean = false;
  eventFile : any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {category : Category},
    private formBuilder : FormBuilder,
    private categoryService : CategoriesService,
    private router : Router,
    private dialog : MatDialog
  ){
    const category = data.category;
    this.id = category.id.toString();
    this.category = this.data.category;
    this.formData = this.formBuilder.group({
      name  : [category.name, [Validators.email]],
    })
  }

  updateCategory(){
    this.categoryService.put('id='+this.id, this.formData.value).subscribe(data => {
      window.location.reload()
      
    })
  }
}
