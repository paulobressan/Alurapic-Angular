import { Component, Input } from '@angular/core';

const CLOUD = 'http://localhost:3000/imgs/';

@Component({
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
})
export class PhotoComponent {
    private _url = '';
    //Criando inboud property, um setter e um getter
    @Input() set url(url: string) {
        //Se a url não começar com data, quer dizer que ela esta vindo do servidor
        if (!url.startsWith('data'))
            this._url = CLOUD + url;
        else
            this._url = url;
    }
    get url() {
        return this._url;
    }
    @Input() description: string;
}