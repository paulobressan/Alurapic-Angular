import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    templateUrl: './sigin.component.html'
})
export class SiginComponent implements OnInit{  
    //O form group vai controlar o form do formulario, eles vão estar ligados por bind
    loginForm: FormGroup;
    
    constructor(
        //O formBuilder é um construtor de formularios que disponibiliza um formulario injetado no construtor pronto para ser usado
        private formBuilder: FormBuilder
    ){}

    ngOnInit(): void {
        //definindo um grupo de formControlName, ou seja os input vão repesentar cada item do grupo.
        //o loginForm vai controlar todos valores do formulario
        this.loginForm = this.formBuilder.group({
            //input relacionado com o userName, o primeiro parametro é o valor default do input e o segundo é suas validações
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
}