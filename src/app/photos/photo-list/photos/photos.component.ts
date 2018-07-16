import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {
  @Input() photos: Photo[] = [];
  rows: any[] = [];

  constructor() { }

  //Clico de vida que vai ser chamado quando haver alterações de valores na props
  ngOnChanges(changes: SimpleChanges) {
    //verificar se photos foi modificado, se foi vai ser executado o trecho de codigo do if
    if (changes.photos)
      //cria uma nova lista de array de 3 photos
      this.rows = this.groupColumns(this.photos);
  }

  groupColumns(photos: Photo[]) {
    //novo array
    const newRows = [];
    //for com intervalo de 3 posição
    for (let i = 0; i < photos.length; i += 3) {
      //adicionando ao novo array o intervalo de 3 posição do array passado(photos) como parametro do metodo.
      newRows.push(photos.slice(i, i + 3));
    }
    //retornando novo array
    return newRows;
  }

}
