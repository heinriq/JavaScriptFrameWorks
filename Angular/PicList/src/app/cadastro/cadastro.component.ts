import { Component, OnInit } from '@angular/core';
import { PhotoComponent } from '../photo/photo.component';
import { Http, Headers } from '@angular/http';
import { PhotoService } from '../services/photo.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { error } from 'selenium-webdriver';
import { FormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  photo = new PhotoComponent();
  mensagem: string;
  classe = 'alert-success';
  formCadastro: FormGroup;

  constructor(private service: PhotoService, formBuilder: FormBuilder) {
    this.photo = new PhotoComponent();
    this.formCadastro = formBuilder.group({
      titulo: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      url: ['', Validators.required],
      descricao: ''
    });
  }

  ngOnInit() {
  }

  salvar(event: Event) {
    event.preventDefault();

    console.log(this.photo);

    this.service.create(this.photo).subscribe(
      response => {
        console.log(response);
      }, erro => console.log(erro),
      () =>  this.photo = new PhotoComponent());
  }
}
