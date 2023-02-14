import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @Input('menuType') menuType : string;
  public opened = false;
  constructor(
    private authService : AuthService,
    private router : Router
  ) {
    
  }

  closeSession(){
    this.authService.logout()
  }

  openCart(){
    this.opened = !this.opened;

  }
}
