import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ap-teste',
    templateUrl: './teste.component.html'
})
export class TesteComponent {
    @Output() apInputTeste = new EventEmitter<string>();
    valor: string = "";
    
    inputValor(event){
        this.valor = event.target.value;
        this.apInputTeste.emit(this.valor);
    }
}