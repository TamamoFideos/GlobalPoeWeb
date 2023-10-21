import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import Order from '../model/order.model copy';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService extends BaseService<Order> {
  protected override path = 'purchases';
  protected override singlePath = 'purchase';
  constructor(override httpClient : HttpClient) {
    super(httpClient)
  }

  public getPdfs(args = ''){
    return this.httpClient.get<{list : String[]}>('http://10.0.0.14'+'/webdav-server/orders'+".php"+((args !== '') ? '?' + args : args))
    .pipe(map((data ) => {
      console.log(data);
      
      return data.list;
    }))
  }

}
