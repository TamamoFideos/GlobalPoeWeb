import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  protected baseUrl = 'GlobalWebBAck'

  constructor(private http: HttpClient) {}

  uploadFile(event : any, path : string, singlePath : string, id: string) {
      const file:File = event.target.files[0];
      const formData = new FormData();
      formData.append("image", file);
      return this.http.post(this.baseUrl+"/"+path+'/upload-'+singlePath +".php"+'?id='+id, formData);
  }
}
