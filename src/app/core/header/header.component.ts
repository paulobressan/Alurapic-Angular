import { Component } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { Router } from '../../../../node_modules/@angular/router';

import { UserService } from '../user/user.service';
import { User } from '../user/user';
@Component({
    selector: 'ap-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    //toda vez que temos uma variavel que guarda um observable é uma boa pratica colocar um $ no final
    user$: Observable<User>;

    constructor(
        private userService: UserService,
        private router : Router
    ) {
        //Pegando o usuário logado, o subscribe foi feito no templa pelo pipe async
        this.user$ = userService.getUser();
    }

    logout(){
        //deslogar
        this.userService.logout();
        //redirecionar para rota de login
        this.router.navigate(['']);
    }
}