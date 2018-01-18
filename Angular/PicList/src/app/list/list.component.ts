import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PhotoComponent } from '../photo/photo.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  title = 'your first spa';
  photoList: PhotoComponent[] = [];

  constructor(private _http: Http) {
    const returnGet = _http.get('http://localhost:3000/v1/fotos')
      .subscribe((response) => {
        this.photoList = response.json();
        console.log(this.photoList);
      }, (error) => console.log(error));
  }

}
