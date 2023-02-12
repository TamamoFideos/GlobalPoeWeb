import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formData : FormGroup;
  constructor(
    private formBuilder : FormBuilder,
    private AuthService : AuthService
  ){
    this.formData = this.formBuilder.group({
      email  : ["", [Validators.email]],
      password  : ["", [Validators.required]],
    })
  }

  login(){
    this.AuthService.login(this.formData.value)
  }
}
