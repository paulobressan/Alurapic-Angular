import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../core/auth/auth.guard';
import { SiginComponent } from './signin/sigin.component';
import { SignUpComponent } from './signup/signup.component';

//variaveis de rotas
const routes: Routes = [
    //LAZY LOADING
    {
        //rota dependente da rota PAI no app routing module.
        path: '', 
        component: HomeComponent, 
        canActivate: [AuthGuard],
        //rotas filhas de component
        children: [
            {
                path: '', component: SiginComponent
            },
            {
                path: 'signup', component: SignUpComponent
            },
        ]
    }
];

@NgModule({
    imports: [
        //todo arquivo de rota de modulos filhos são importado para o routerModule como forChild
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
//modulo de rotas LAZY LOAD
export class HomeRoutingModule { }