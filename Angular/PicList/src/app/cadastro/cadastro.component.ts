import { Component, OnInit } from '@angular/core';
import { PhotoComponent } from '../photo/photo.component';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  photo = new PhotoComponent();
  http: Http;
  constructor(private _http: Http) {
    this.http = _http;
  }

  ngOnInit() {
  }

  salvar(submit: Event) {
    submit.preventDefault();
    const cabecalho = new Headers();
    cabecalho.append('Content-Type', 'application/json');

    this.http
    .post(
      'http://localhost:3000/v1/fotos',
      JSON.stringify(this.photo),
      { headers: cabecalho}
    ).subscribe(() => this.photo = new PhotoComponent());
  }
}
