import { Component, OnInit } from '@angular/core';
import { PhotoComponent } from '../photo/photo.component';
import { Http, Headers } from '@angular/http';
import { PhotoService } from '../services/photo.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { error } from 'selenium-webdriver';

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

  salvar(form: NgForm) {
    console.log(this.photo);

    this.service.create(this.photo).subscribe(
      response => {console.log(response); }, erro => console.log(erro),
      () => {
          this.mensagem = `Foto ${this.photo.titulo} cadastrada com sucesso`;
          this.classe = 'alert-success';
          this.photo = new PhotoComponent();
      });

      this.mensagem = '';
  }
}
