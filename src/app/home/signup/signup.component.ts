import { Component, OnInit } from '../../../../node_modules/@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../../node_modules/@angular/forms';
import { LowerCaseValidator } from '../../shared/components/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

@Component({
    templateUrl: './signup.component.html'
})
export class SignUpComponent implements OnInit {

    signUpForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private UserNotTakenValidatorService : UserNotTakenValidatorService
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
    }
}