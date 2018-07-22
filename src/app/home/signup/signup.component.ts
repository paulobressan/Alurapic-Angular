import { Component, OnInit, ViewChild, ElementRef, Input } from '../../../../node_modules/@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../../node_modules/@angular/forms';
import { LowerCaseValidator } from '../../shared/components/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { NewUser } from './new-user';
import { SignUpService } from './signup.service';
import { Router } from '../../../../node_modules/@angular/router';
import { PlatformDetectorService } from '../../core/platform-detector/platform-detector.service';

@Component({
    templateUrl: './signup.component.html',
    //definindo o provedor do component
    providers: [UserNotTakenValidatorService]
})
export class SignUpComponent implements OnInit {
    @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;
    signUpForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private UserNotTakenValidatorService : UserNotTakenValidatorService,
        private signUpService: SignUpService,
        private router:Router,
        private platformDetectorService : PlatformDetectorService
    ) { }

    ngOnInit(): void {
        //o serviço UserNotTakenValidatorService o metodo chek retorna uma função de validação

        //configurando o formulario
        this.signUpForm = this.formBuilder.group({
            //validações de cada prop que representa cada input
            userName: ['', [
                Validators.required,
                LowerCaseValidator,
                Validators.minLength(2),
                Validators.maxLength(30)
            ], this.UserNotTakenValidatorService.CheckUserNameTaken()],
            fullName: ['', [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(40)
            ]],
            email: ['', [
                Validators.required,
                Validators.email
            ]],
            password: ['', [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(14)
            ]]
        })
        //validando se esta no navegador para manipular o DOM
        //Para ter todos os metodos disponivel de um input é necessario tipar o tipo de elemento html
        this.platformDetectorService.isPlatformBrowser() && this.emailInput.nativeElement.focus();
    }

    signup(){
        //o getRawValue devolve um objeto com as props para não ter que pegar prop por prop
        const newUser = this.signUpForm.getRawValue() as NewUser;
        this.signUpService
        .signup(newUser)
        .subscribe(()=>{
            this.router.navigate(['']);
        }, err => console.log(err));
    }
}