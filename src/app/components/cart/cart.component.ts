import { Component } from '@angular/core';
import localeEs from '@angular/common/locales/es-MX';
import Product from '../../model/product.model';
import ProductOrder from '../../model/product-order.model';
import { CartService } from '../../services/cart.service';
import { formatCurrency, registerLocaleData } from '@angular/common';
import Order from '../../model/order.model copy';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  public orders :ProductOrder[]

  constructor(
    private cartService : CartService,
    private authService : AuthService,
    private router : Router
  ){
    this.cartService.retrieve()
    this.orders = cartService.orders;
    registerLocaleData(localeEs, 'MXN');

  }

  formatCurr(value : number){
    return formatCurrency(value, 'MXN', "$")
  }


  addAmount(order : ProductOrder){
    const orderFound = this.orders.indexOf(order);
    this.orders[orderFound].amount++;
    this.cartService.save()
  }

  payment(){
    const user = this.authService.getUser()
    if(!user){
      this.router.navigateByUrl('login')
    }else{
      this.router.navigateByUrl('sites/payment')
    }
    
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
