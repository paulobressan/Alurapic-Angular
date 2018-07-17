import { Injectable } from "../../../../node_modules/@angular/core";
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from "../../../../node_modules/@angular/router";

import { PhotoService } from "../photo/photo.service";
import { Observable } from "../../../../node_modules/rxjs";
import { Photo } from "../photo/photo";

//Tornando essa classe injetavel
@Injectable({
    //Injetavel para toda aplicação
    providedIn: 'root'
})
//Criando a classe e implementando a interface Resolve com o tipo de retorno.
export class PhotoListResolver implements Resolve<Observable<Photo[]>>{
    //Injetando o PhotoService
    constructor(private service: PhotoService) { }
    //Metodo implementado pela interface Resolve, ele retorna o mesmo tipo de retorno da interface
    //Ele espera o ActivatedRouteSnapshot que é a rota no momento em que for executado.
    //E um segundo parametro que é o estado da rota no momento que foi executado
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) :Observable<Photo[]> {
        //capturando o parametro da rota no momento de execução
        const userName = route.params.username;
        //Retornando os valores que o service retorna que é do mesmo tipo que o retorno da interface e metodo.
        return this.service.listFromUser(userName);
    }
}