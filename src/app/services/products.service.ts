import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import Product from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService<Product> {

  constructor(override httpClient : HttpClient) {
    super(httpClient)
  }
  
}
