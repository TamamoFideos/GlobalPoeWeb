import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import Product from '../model/product.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService<Product> {
  protected override path = 'products';
  protected override singlePath = 'product';
  constructor(override httpClient : HttpClient) {
    super(httpClient)
  }
  
 
}
