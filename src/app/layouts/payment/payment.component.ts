import { registerLocaleData, formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import ProductOrder from '../../model/product-order.model';
import localeEs from '@angular/common/locales/es-MX';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { PurchaseService } from '../../services/purchase.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  formData : FormGroup;
  public orders :ProductOrder[]
  public total : number = 0;
  public clientId : string;
  constructor(
    private formBuilder : FormBuilder,
    private cartService : CartService,
    private authService : AuthService,
    private purchaseService : PurchaseService
  ){
    this.cartService.retrieve()
    this.orders = cartService.orders;
    registerLocaleData(localeEs, 'MXN');
    this.clientId = this.authService.getUser()?.id || '0' ;
    this.orders.forEach(data => {
      this.total += data.amount * data.product.price;
    })
    this.formData = this.formBuilder.group({
      address  : ["", [Validators.required]],
      cvv  : ["", [Validators.required]],
      card  : ["", [Validators.required]],
      cardDate  : ["", [Validators.required]],
      client_id  : [this.clientId, [Validators.required]],
    })
  }

  formatCurr(value : number){
    return formatCurrency(value, 'MXN', "$")
  }

  postPurchase(){
    const value = this.formData.value;
    value.orders = this.orders;
    this.purchaseService.post(value).subscribe(data=> {
      localStorage.removeItem('cart')
      this.cartService.orders = [];
      //window.location.reload();
    }, err => {
      localStorage.removeItem('cart')
      this.cartService.orders = [];
      //window.location.reload();
    })

  }
}
