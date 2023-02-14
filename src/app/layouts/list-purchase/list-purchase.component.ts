import { Component } from '@angular/core';
import { PurchaseService } from '../../services/purchase.service';
import Order from '../../model/order.model copy';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-list-purchase',
  templateUrl: './list-purchase.component.html',
  styleUrls: ['./list-purchase.component.css']
})
export class ListPurchaseComponent {
  public orders : Order[];
  constructor(
    private purchaseService : PurchaseService,
    private authService : AuthService,
  ){

  }
  ngOnInit(): void {
    this.purchaseService.get("id="+this.authService.getUser()?.id).subscribe(data => {
      this.orders = data;
    })
  }

}
