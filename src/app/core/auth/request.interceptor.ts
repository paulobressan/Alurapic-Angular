import { HttpInterceptor, HttpHandler, HttpRequest, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent } from '../../../../node_modules/@angular/common/http';
import { Injectable } from '../../../../node_modules/@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { TokenService } from '../token/token.service';

@Injectable({
    providedIn: 'root'
})
export class RequestInterceptor implements HttpInterceptor{
    constructor(private tokenService : TokenService){}
    //interceptando a requisição depois que o usuário fizer login
    intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpSentEvent
        | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>>
    {
        //Se estiver logado, enviar o token e toda requisição
        if(this.tokenService.hasToken()){
            const token = this.tokenService.getToken();
            req = req.clone({
                setHeaders:{
                    'x-access-token':token
                }
            })
        }
        return next.handle(req);
    }
}