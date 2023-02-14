import { Component } from '@angular/core';
import Product from '../../model/product.model';
import ProductOrder from '../../model/product-order.model';
import { CartService } from '../../services/cart.service';
import { formatCurrency } from '@angular/common';
import Order from '../../model/order.model copy';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  public orders :ProductOrder[]

  constructor(
    private cartService : CartService
  ){
    this.cartService.retrieve()
    this.orders = cartService.orders;
  }

  formatCurr(value : number){
    return formatCurrency(value, 'MXN', "$")
  }


  addAmount(order : ProductOrder){
    const orderFound = this.orders.indexOf(order);
    this.orders[orderFound].amount++;
    this.cartService.save()
  }

  removeAmount(order : ProductOrder){
    const orderFound = this.orders.indexOf(order);
    this.orders[orderFound].amount--;
    if(this.orders[orderFound].amount < 1 ){
      this.orders.splice(orderFound, 1)
      
    }
    this.cartService.save()
  }
}
