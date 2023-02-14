import { Injectable } from '@angular/core';
import Product from '../model/product.model';
import ProductOrder from '../model/product-order.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public orders : ProductOrder[] = []
  constructor() { 
    this.retrieve()
  }


  addProduct(product : Product){
    let order : ProductOrder = {
      productName : product.name,
      amount : 1,
      product
    };
    const orderFound : any  = this.orders.find(data => data.productName==order.productName)
    let index = this.orders.indexOf(orderFound);
    if(index > -1){
      this.orders[index].amount =  this.orders[index].amount + 1;
    }else{
      this.orders.push(order)
    }
    this.save();
  }

  save(){
    localStorage.setItem('cart', JSON.stringify(this.orders));
  }
  retrieve(){
    this.orders = JSON.parse(localStorage.getItem('cart') || '[]');
  }
}
