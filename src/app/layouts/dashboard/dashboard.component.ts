import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public menuType : string;
  constructor(
    private router: Router,
    private authService : AuthService){
      
  }
  ngOnInit() {
    const user= this.authService.getUser();
    if(!user){
      
      this.menuType = 'Invitado'
      return;
    }
    if(user?.role == 'Cliente'){
      this.menuType= 'Cliente'
    }else{
      this.menuType= 'Empleado'
    }
  }
}
