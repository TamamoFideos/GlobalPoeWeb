import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formData : FormGroup;
  constructor(
    private formBuilder : FormBuilder,
    private AuthService : AuthService,
  ){
    this.formData = this.formBuilder.group({
      email  : ["", [Validators.email]],
      password  : ["", [Validators.required]],
      confirmPassword  : ["", [Validators.required]],
      name  : ["", [Validators.required]],
    })
  }
  postUser(){
    let password = this.formData.get('password')?.value; 
    let confirmPassword = this.formData.get('confirmPassword')?.value; 
    if(password === confirmPassword){
      this.AuthService.createUser(this.formData.value).subscribe(data => {
        console.log("Creacion de usuario");
      })
    }else{
      console.log("Las contraseñas no coniciden");
      
    }
  }
}
