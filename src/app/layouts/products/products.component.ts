import { formatCurrency } from '@angular/common';
import { Component, LOCALE_ID } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { CategoriesService } from '../../services/categories.service';
import localeEs from '@angular/common/locales/es-MX';
import { registerLocaleData } from '@angular/common';
import Product from 'src/app/model/product.model';
import Category from 'src/app/model/category.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent{
  public products : Product[]
  public categories : Category[]
  public selectedCatalog : string;
  constructor(
    private productService : ProductsService,
    private categoryService : CategoriesService){
    registerLocaleData(localeEs, 'MXN');

  }

  ngOnInit(): void {
    this.categoryService.get().subscribe(data=> {
      this.categories = data;
      if(this.categories.length !== 0){
        this.selectedCatalog = this.categories[0].name;
        this.productService.get(`category=${this.categories[0].id}`).subscribe(data=> {
          this.products = data;          
        })
      }
    })
  }

  formatCurr(value : number){
    return formatCurrency(value, 'MXN', "$")
  }

  changeProducts(catalog: Category){
    this.productService.get(`category=${catalog.id}`).subscribe(data=> {
      this.selectedCatalog = catalog.name;
      this.products = data;
      
    })
  }
}
