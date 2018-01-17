import {Routes, RouterModule} from '@angular/router'
import {ListComponent} from '../list/list.component'
import {CadastroComponent} from '../cadastro/cadastro.component'

const appRoutes: Routes=[
    {path:'', component:ListComponent},
    {path:'cadastro', component:CadastroComponent}
]

export const roteamento = RouterModule.forRoot(appRoutes)