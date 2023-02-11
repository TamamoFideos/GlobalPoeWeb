import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {
  protected baseUrl = 'http://localhost/GlobalWebBack'
  protected path = ''
  constructor(
    public httpClient : HttpClient
  ) { 

  }
  
  public get(args = ''){
    
    return this.httpClient.get<{list : T[]}>(this.baseUrl+'/'+this.path+'/list'+((args !== '') ? '?' + args : args))
    .pipe(map((data ) => {
      return data.list;
    }))
  }

  
}
