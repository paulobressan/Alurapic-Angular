import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { SiginComponent } from './home/signin/sigin.component';
import { AuthGuard } from './core/auth/auth.guard';
import { SignUpComponent } from './home/signup/signup.component';

//variaveis de rotas
const routes: Routes = [
    {
        path: '', component: SiginComponent, canActivate: [AuthGuard]
    },
    {
        path: 'signup', component: SignUpComponent
    },
    { 
        //Para utilizar os resolver é necessario definir na rota o resolver que espera um parametro que é um objeto json
        // e nele vamos definir uma prop e atribuir a ela o Resolve que ja vai ser retornado as informações do resolve
        path: 'user/:username', component: PhotoListComponent, resolve: {
            photos: PhotoListResolver
        }
    },
    { 
        path: 'p/add', component: PhotoFormComponent 
    },
    { 
        path: '**', component: NotFoundComponent 
    }
];

@NgModule({
    imports: [
        //importando o modulo de fotos e ja criando uma ligação entre o router modulo e o arquivo de rotas que é nossa variavel
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
//modulo de rotas
export class AppRoutingModule {}