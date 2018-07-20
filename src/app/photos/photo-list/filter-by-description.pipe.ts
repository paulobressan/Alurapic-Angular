import { Pipe, PipeTransform } from "@angular/core";
import { Photo } from "../photo/photo";

//A anotação @Pipe para definir que essa classe é um Pipe. 
//Ele espera um objeto e nesse objeto podemos definir o name o pipe.
@Pipe({ name: "filterByDescription" })
//Para executar uma transformação nos valores que vai ser aplicado o pipe é utilizado o metodo transform.
//Para tornar mais seguro e boa pratica, implementamos a interface PipeTransform
export class FilterByDescription implements PipeTransform {
    //O transform espera como primeiro parametro os valores que vão ser aplicado o pipe ou seja {{ESSE VALOR | PIPE}}
    //O segundo parametro é os parametros passado pelo pipe, podemos passar um array de parametro ou somente um.
    transform(photos: Photo[], descriptionQuery: string) {
        //pegando valor passado na description retirando os espaços e tornando lower case
        descriptionQuery = descriptionQuery
            .trim()
            .toLowerCase();
        if (descriptionQuery) {
            //filtro valores tornando cada descrição da lista lowercase e verificando se a descriptionQuery esta inclusa na descrition da photo da lista.
            return photos.filter(p => 
                p.description.toLowerCase().includes(descriptionQuery));
        }else{
            return photos;
        }
    }
}