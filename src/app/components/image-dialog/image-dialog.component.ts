import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.css']
})
export class ImageDialogComponent {
  documentPath : string;
  baseUrl = '10.0.0.12/GlobalWebBack/images/'

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {url : string, localFile : File},
  ){
    this.documentPath = this.baseUrl+ data.url;
    if(!this.data.localFile){
      this.documentPath = this.baseUrl+ data.url;
    }else{
      this.documentPath = URL.createObjectURL(this.data.localFile)
    }
  }

}
