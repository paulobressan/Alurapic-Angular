import { Injectable } from '../../../../node_modules/@angular/core';
import { UserService } from '../user/user.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '../../../../node_modules/@angular/router';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable({
    providedIn: 'root'
})
//logica de bloqueio de rotas
//interface CanAcitvate valida se o usuario tem acesso a rota
export class AuthGuard implements CanActivate {
    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    //metodo da interface
    //O metodo retorna true ou false para sabe se o usuario tem acesso a rota.
    //O metodo ao utilizar | pode retornar mais te uma variação de tipos
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if (this.userService.islogged()) {
            //se o usuário ja estiver logado redirecionar para a rota de user/Nome do usuario.
            this.router.navigate(['user', this.userService.getUserName()])
            return false;
        }
        return true;
    }
}