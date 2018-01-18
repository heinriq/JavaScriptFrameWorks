import { Component, OnInit } from '@angular/core';
import { PhotoComponent } from '../photo/photo.component';
import { Http, Headers } from '@angular/http';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  photo = new PhotoComponent();
  mensagem: string;
  classe = 'alert-success';
  constructor(private service: PhotoService) {
  }

  ngOnInit() {
  }

  salvar(submit: Event) {
    submit.preventDefault();
    const cabecalho = new Headers();
    cabecalho.append('Content-Type', 'application/json');

    this.service
    .creat(this.photo).subscribe(
      () => {
        this.photo = new PhotoComponent();
        this.mensagem = `Foto ${this.photo.titulo} cadastrada com sucesso`;
        this.classe = 'alert-success';
      }, error => {
        this.classe = 'alert-danger';
        this.mensagem = `Foto não cadastrada`;
      });
      this.mensagem = '';
  }
}
