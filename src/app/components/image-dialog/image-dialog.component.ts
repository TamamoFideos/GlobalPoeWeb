import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.css']
})
export class ImageDialogComponent {
  documentPath : string;
  baseUrl = 'http://localhost/GlobalWebBack/images/'

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {url : string},
  ){
    this.documentPath = this.baseUrl+ data.url;
  }

}
