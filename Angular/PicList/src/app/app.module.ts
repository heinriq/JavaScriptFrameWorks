import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { roteamento } from "./routes/app.routes";
import { AppComponent } from './app.component';
import { PhotoModule } from './photo/photo.module'
import { PanelModule } from './panel/panel.module';
import { ListComponent } from './list/list.component';
import { CadastroComponent } from './cadastro/cadastro.component'


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CadastroComponent
  ],
  imports: [
    roteamento,
    BrowserModule,
    PhotoModule,
    PanelModule,
    HttpModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
