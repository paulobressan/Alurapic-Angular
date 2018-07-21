import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//operador tap do rxjs. O tap executa uma função anonima antes de retornar dados de um metodo.
import {tap} from 'rxjs/operators';
import { TokenService } from '../token/token.service';
import { UserService } from '../user/user.service';

const API: string = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService : UserService
  ) { }

  authenticate(userName: string, password: string) {
   return this.http.post(`${API}/user/login`, { userName, password }, {observe: 'response'})
   //criando um tubo para executar uma função antes do valor ser retornado
   .pipe(tap(res => {
     const authToken = res.headers.get('x-access-token');
     this.userService.setToken(authToken);
     console.log(authToken);
   }));
  }
}
