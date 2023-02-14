import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit{
  public menuType : string;
  constructor(
    private router: Router,
    private authService : AuthService){
      
  }

  ngOnInit() {
    const user= this.authService.getUser();
    console.log(user);
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
