import { Injectable } from '../../../../node_modules/@angular/core';
import { AbstractControl } from '../../../../node_modules/@angular/forms';
import { debounceTime, switchMap, map, first } from 'rxjs/operators';

import { SignUpService } from './signup.service';

@Injectable({ providedIn: 'root' })
export class UserNotTakenValidatorService {
    constructor(private signUpService: SignUpService) { }


    //O metodo que retorna uma função que é o validator
    CheckUserNameTaken() {
        //a função arrow espera como parametro o control: AbstractControl que indica que é um validator
        return (control: AbstractControl) => {
            //O sistema de validações assincrona do angular executa o subscribe para nós
            return control
                //esse cara captura os valores assincronos, ou seja captura um observable
                .valueChanges
                //para não chamar a todo evento a api, é utilizado o debounceTime
                .pipe(debounceTime(300))
                //O switchMap pega a emissão do Observable a cima e retorna a emissão do metodo do service(checkUserNameTaken)
                //É utilizado o switch para não ter 2 emissão, ele para de executar o fluxo anterior do valueChanges e começa a escutar o fluxo do metodo do service(checkUserNameTaken)
                .pipe(switchMap(userName =>
                    //consulta e retorna um observable
                    this.signUpService.checkUserNameTaken(userName)
                ))
                //para pegar o valor emitido pelo metodo do service, é utilizado o map do rxjs
                .pipe(map(isTaken => isTaken ? { userNameTaken: true } : null))
                //todo subscribe precisar ser completado ou vai ficar escutando o tempo todo e para isso vamos pegar somente o primeiro valor omitido
                //e espera o debounce de 300 mile segundo para pegar a primeira omissão novamente.
                .pipe(first())
        }
    }
}