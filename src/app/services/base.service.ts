import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {
  protected baseUrl = 'GlobalWebBAck'
  protected path = ''
  protected singlePath = ''
  constructor(
    public httpClient : HttpClient
  ) { 

  }
  
  public get(args = ''){
    
    return this.httpClient.get<{list : T[]}>(this.baseUrl+'/'+this.path+'/list'+".php"+((args !== '') ? '?' + args : args))
    .pipe(map((data ) => {
      console.log(data);
      
      return data.list;
    }))
  }

  public post(data : any){
    return this.httpClient.post<T>(this.baseUrl+'/'+this.path+'/post-'+this.singlePath + ".php", data)
    .pipe(map((data ) => {
      return data;
    }))
  }

  public put(args = '', data : any){
    return this.httpClient.post<{list : T[]}>(this.baseUrl+'/'+this.path+'/put-'+this.singlePath +".php"+((args !== '') ? '?' + args : args), data)
    .pipe(map((data ) => {
      return data;
    }))
  }

  public delete(args = ''){
    return this.httpClient.delete<{list : T[]}>(this.baseUrl+'/'+this.path+'/delete-'+this.singlePath +".php"+((args !== '') ? '?' + args : args))
    .pipe(map((data ) => {
      return data;
    }))
  }


  
}
