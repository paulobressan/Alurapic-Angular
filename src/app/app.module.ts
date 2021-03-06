import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { PhotosModule } from './photos/photos.module';
import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';
import { CoreModule } from './core/core.module';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //O browser Module é responsavel pela aplicação funcionar e tambem exporta o common module.
    BrowserModule,
    PhotosModule,
    ErrorsModule,
    CoreModule,
    //Componente que gerencia todas as rotas
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
