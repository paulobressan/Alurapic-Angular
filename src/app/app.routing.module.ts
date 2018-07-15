import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

//variaveis de rotas
const routes: Routes = [
    { path: 'user/:username', component: PhotoListComponent },
    { path: 'p/add', component: PhotoFormComponent },
    { path: '**', component: NotFoundComponent }
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