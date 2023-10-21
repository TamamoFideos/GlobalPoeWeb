import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PurchaseService } from 'src/app/services/purchase.service';

@Component({
  selector: 'app-list-purchase-pdfs',
  templateUrl: './list-purchase-pdfs.component.html',
  styles: [
  ]
})
export class ListPurchasePdfsComponent {
  public files : String[];
  constructor(
    private purchaseService : PurchaseService,
    public authService : AuthService,
  ){

  }
  ngOnInit(): void {
    this.purchaseService.getPdfs("id="+this.authService.getUser()?.id).subscribe(data => {
      this.files = data;
      console.log(this.files);
      
    })
  }
}
