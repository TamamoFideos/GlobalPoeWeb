import { Injectable } from '@angular/core';
import User from '../model/user.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  protected baseUrl = 'http://localhost/GlobalWebBack/auth'
  public user : User
  constructor(
    private httpClient : HttpClient,
    private router : Router
  ) { 

  }


  login(formData : any){
    this.httpClient.post(this.baseUrl+"/login", formData).subscribe(data=> {
      this.user = data as User;
      this.router.navigateByUrl('/')
    })
  }

  createUser(formData : any){
    return this.httpClient.post(this.baseUrl+"/post-user", formData);
  }
}
