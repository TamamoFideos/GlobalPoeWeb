import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import Order from '../model/order.model copy';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService extends BaseService<Order> {
  protected override path = 'purchases';
  protected override singlePath = 'purchase';
  constructor(override httpClient : HttpClient) {
    super(httpClient)
  }
}
