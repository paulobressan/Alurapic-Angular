import { Injectable } from '../../../../node_modules/@angular/core';

const KEY :string = 'authToken';

@Injectable({
    providedIn: 'root'
})
export class TokenService{
    //Toda regra de token quem vai ser responsavel é o serviço de token
    hasToken() : boolean{
        //as duas esclama significa 2 negação, ou seja se tiver uma string e for negado vai ser falso 
        //e o outro vai tornar true, o ciclo inverso se não conter
        return !!this.getToken();
    }

    setToken(token){
        //gravando o token na localstorage
        window.localStorage.setItem(KEY, token);
    }

    getToken(){
        //pegando o token gravado
        return window.localStorage.getItem(KEY);
    }

    removeToken(){
        //removendo
        window.localStorage.removeItem(KEY);
    }
}