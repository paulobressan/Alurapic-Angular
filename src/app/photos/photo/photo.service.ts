import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo';

const API = 'http://localhost:3000';

//Para que podemos injetar essa classe em outros componentes podemos usar o Injectable.
@Injectable({ providedIn: 'root' })
//Isolando o codigo de chamada para api de photos
export class PhotoService {
    constructor(private http: HttpClient) { }

    listFromUser(userName: string) {
        //Criando uma requisição com get
        return this.http
            //Tudo que vim no get vai ser tratado como tipo Object
            .get<Photo[]>(`${API}/${userName}/photos`);
    }

    listFromUserPaginated(userName: string, page: number) {
        //criando um parametro para passar na url, o httpParams é do HttpClient
        const params = new HttpParams()
            .append('page', page.toString());
        //Criando uma requisição com get
        return this.http
            //Tudo que vim no get vai ser tratado como tipo Object, o segundo parametro é o parametro
            .get<Photo[]>(`${API}/${userName}/photos`, { params });
    }

    upload(description: string, allowCommnents: boolean, file: File) {
        //Não vamos enviar um json e sim um form-data porque vamos enviar arquivos
        //Criando um form data
        const formData = new FormData();
        //Adicionando os dados para enviar
        formData.append('description', description);
        formData.append('allowComments', allowCommnents ? 'true' : 'false');
        //Campo que recebe a imagem
        formData.append('imageFile', file);
        //Requisitando o servidor
        return this.http.post(`${API}/photos/upload`, formData);
    }
}