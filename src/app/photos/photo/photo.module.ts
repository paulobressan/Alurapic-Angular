import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations:[
        PhotoComponent
    ],
    imports:[
        //Modulo dxe requisição disponivel para esse modulo e seus componente funcionar
        HttpClientModule,
        CommonModule
    ],
    exports: [
        PhotoComponent
    ]
})
export class PhotoModule{}