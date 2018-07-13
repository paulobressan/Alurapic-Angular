//Para criar o modulo é necessario usar o import do core do angular.
import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";

//criando modulo para encapsular tudo que é de photo.
@NgModule({
    //declar componente que vão se comunicar entre eles.
    declarations: [PhotoComponent],
    //importando outros modulos
    imports: [],
    //exportando componentes desse modulo para tornar visivel no appmodule.
    exports: [PhotoComponent]
})
export class PhotosModule {

}