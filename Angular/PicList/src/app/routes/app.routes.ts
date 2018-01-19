import {Routes, RouterModule} from '@angular/router';
import {ListComponent} from '../list/list.component';
import {CadastroComponent} from '../cadastro/cadastro.component';
import { Component } from '@angular/core/src/metadata/directives';

const appRoutes: Routes = [
    {path: '', component: ListComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'cadastro/:id', component: CadastroComponent},
    {path: '**', redirectTo: ''}
];

export const roteamento = RouterModule.forRoot(appRoutes);
