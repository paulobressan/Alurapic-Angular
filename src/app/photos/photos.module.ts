//Para criar o modulo é necessario usar o import do core do angular.
import { NgModule } from '@angular/core';

import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
//criando modulo para encapsular tudo que é de photo.
@NgModule({
    //importando outros modulos
    imports: [       
        PhotoModule,
        PhotoFormModule,
        PhotoListModule
    ],
    //exportando componentes desse modulo para tornar visivel no appmodule.
    // exports: [PhotoComponent, PhotoListComponent]
})
export class PhotosModule {

}