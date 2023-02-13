import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Category from '../model/category.model';
import { BaseService } from './base.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends BaseService<Category>  {
  protected override path = 'categories'
  protected override singlePath = 'category';

  constructor(override httpClient : HttpClient) {
    super(httpClient)
  }
  
}
