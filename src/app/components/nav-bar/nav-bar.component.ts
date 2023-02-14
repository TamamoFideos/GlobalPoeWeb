import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input('menuType') menuType : string;
  public opened = false;
  public name : any;
  constructor(
    private authService : AuthService,
    private router : Router
  ) {
  }

  ngOnInit() {
    this.name = this.authService.getUser()?.name;
      
  }

  closeSession(){
    this.authService.logout()
  }

  openCart(){
    this.opened = !this.opened;

  }
}
