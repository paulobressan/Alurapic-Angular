import { Component, OnInit, Output, EventEmitter, Input } from "../../../../../node_modules/@angular/core";
import { Subject } from "../../../../../node_modules/rxjs";
import { debounceTime } from "../../../../../node_modules/rxjs/operators";

@Component({
    selector: 'ap-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
    //Criando a saida de dados do componente (@Output)
    //O EventEmitter<String> é a classe que contem a criação de eventos dinamicos.
    @Output() onTyping = new EventEmitter<string>();
    @Input() value: string = '';
    //patterns
    debounce: Subject<string> = new Subject<string>();

    ngOnInit(): void {
        //usando a prop do tipo subject e com uma instancia subject
        this.debounce
            //Criando um evento antes de subscrever o valor
            //usando o debounceTime(300) para determinar um tempo para subscrever o valor
            .pipe(debounceTime(300))
            .subscribe(filter => this.onTyping.emit(filter));
    }
    ngOnDestroy(): void {
        //como o debounce é um observable e esta subscrito, ele espera um complete por que ele fica verificando a todo momento
        //Para que quando sairmos do componente e o subscribe não fica na memoria testando, vamos dar um unsubscribe nele.
        this.debounce.unsubscribe();
    }
}