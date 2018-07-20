import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from '../../core/platform-detector/platform-detector.service';

@Component({
    templateUrl: './sigin.component.html'
})
export class SiginComponent implements OnInit {
    //O form group vai controlar o form do formulario, eles vão estar ligados por bind
    loginForm: FormGroup;
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

    constructor(
        //O formBuilder é um construtor de formularios que disponibiliza um formulario injetado no construtor pronto para ser usado
        private formBuilder: FormBuilder,
        //serviço de autenticação criado
        private authService: AuthService,
        //navegador de rotas programatico
        private router : Router,
        //usando o serviço criado para identificar a plataform para manipular o DOM sem problemas
        private platformDetectorService : PlatformDetectorService
    ) { }

    ngOnInit(): void {
        //definindo um grupo de formControlName, ou seja os input vão repesentar cada item do grupo.
        //o loginForm vai controlar todos valores do formulario
        this.loginForm = this.formBuilder.group({
            //input relacionado com o userName, o primeiro parametro é o valor default do input e o segundo é suas validações
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {       
        //pegando o userName do loginForm
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;
        //autenticando
        this.authService
            .authenticate(userName, password)
            .subscribe(res => {
                //Navegando para rota user, o resultado é localhost:4200/user/flavio
                this.router.navigate(['user', userName]);
            }, err => {
                console.log(err);
                alert('user name or password invalid!');
                //validando se esta no navegador para manipular o DOM
                //Para ter todos os metodos disponivel de um input é necessario tipar o tipo de elemento html
                this.platformDetectorService.isPlatformBrowser() && this.userNameInput.nativeElement.focus();
                //o codigo acima funciona como um if, se passar na primeira condição executa a segunda.
                this.loginForm.reset();
            });
    }
}