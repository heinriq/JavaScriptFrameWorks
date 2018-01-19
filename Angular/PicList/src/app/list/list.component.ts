import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PhotoComponent } from '../photo/photo.component';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  title = 'your first spa';
  photoList: PhotoComponent[] = [];
  mensagem = '';

  constructor(private servico: PhotoService) {
    servico.read().subscribe(response => {
      this.photoList = response;
    },
    error => console.log(error));
  }

  excluir(photo: PhotoComponent) {

    this.servico.delete(photo).subscribe(
      response => {
          this.mensagem = `Foto ${photo.titulo} excluida`;
        }, error => console.log(error),
        () => {
          this.photoList = this.photoList.filter(photoFilter => {
            if (photoFilter !== photo) {
              return photoFilter;
            }
          });
    });
  }
}
