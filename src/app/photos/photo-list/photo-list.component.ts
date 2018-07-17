import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from '../../../../node_modules/rxjs';
import {debounceTime} from 'rxjs/operators';

import { Photo } from '../photo/photo';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {
  //Tipo object
  photos: Photo[] = [];
  filter: string = '';
  //patterns
  debounce :Subject<string> = new Subject<string>();

  constructor(
    //indica a rota ativada no momento
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //O activeRouters é a rota ativa no momento
    this.photos = this.activatedRoute.snapshot.data.photos;
    //usando a prop do tipo subject e com uma instancia subject
    this.debounce
    //Criando um evento antes de subscrever o valor
    //usando o debounceTime(300) para determinar um tempo para subscrever o valor
    .pipe(debounceTime(300))
    //subscrevendo
    .subscribe(filter => this.filter = filter);
  }

  ngOnDestroy(): void {
    //como o debounce é um observable e esta subscrito, ele espera um complete por que ele fica verificando a todo momento
    //Para que quando sairmos do componente e o subscribe não fica na memoria testando, vamos dar um unsubscribe nele.
    this.debounce.unsubscribe();
  }
}
