//Para criar o modulo é necessario usar o import do core do angular.
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
//criando modulo para encapsular tudo que é de photo.
@NgModule({
    //declar componente que vão se comunicar entre eles.
    declarations: [
        PhotoComponent, 
        PhotoListComponent, 
        PhotoFormComponent, 
        PhotosComponent
    ],
    //importando outros modulos
    imports: [
        //Modulo dxe requisição disponivel para esse modulo e seus componente funcionar
        HttpClientModule,
        //Common module responsavel pelas diretivas do angular como o NgFor.
        CommonModule
    ],
    //exportando componentes desse modulo para tornar visivel no appmodule.
    // exports: [PhotoComponent, PhotoListComponent]
})
export class PhotosModule {

}