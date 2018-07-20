//O platform_id é um token para identificar qual plataform esta sendo executada a aplicação
import { Injectable, PLATFORM_ID, Inject } from "@angular/core";
//classe que valida se a aplicação esta sendo executada no browser
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class PlatformDetectorService{
    //O @Inject é para especificar o tipo da injeção
    constructor(@Inject(PLATFORM_ID) private platformId: string){}

    //Metodo para validar se esta rodando em um browser
    isPlatformBrowser(){
        //classe para validar se esta em um browser
        return isPlatformBrowser(this.platformId);
    }
}