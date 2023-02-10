import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {
  protected baseUrl = 'localhost/Server'
  protected path = ''
  constructor(
    public httpClient : HttpClient
  ) { 

  }
  
  public get(){
    return this.httpClient.get(this.baseUrl)
  }
}
