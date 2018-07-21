import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { Observable, BehaviorSubject } from '../../../../node_modules/rxjs';
import { User } from './user';
//importando o decode do jwt
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //escutando quando o token for adicionado
  private userSubject = new BehaviorSubject<User>(null);
  private userName: string;


  constructor(private tokenService: TokenService) {
    //quando entrar no sistema é verificado se existe o token e 
    //se existir ele vai decodificado e escutado pelo subject
    this.tokenService.hasToken() && this.decodeAndNotefy();
  }
  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotefy();
  }

  getUser(): Observable<User> {
    //quem chamar esse metodo vai receber um observable do tipo user
    //E vai poder ficar escutando se existe usuário logado.
    return this.userSubject.asObservable();
  }

  //pegar o token salvo, decodificar, pegar o valor do payload e tonar os valores como do tipo User.
  private decodeAndNotefy(): any {
    //pegando o token
    const token = this.tokenService.getToken();
    const user: User = jwt_decode(token) as User;
    this.userName = user.name;
    this.userSubject.next(user);
  }

  logout() {
    this.tokenService.removeToken();
    //quando deslogar vou emitir o valor nulo para no header aparecer o faça login a mensagem.
    this.userSubject.next(null);
  }

  //Metodo que verifica se o usuario esta logado
  islogged() {
    return this.tokenService.hasToken();
  }

  //retornar o userName do usuário logado
  getUserName() {
    return this.userName;
  }
}
