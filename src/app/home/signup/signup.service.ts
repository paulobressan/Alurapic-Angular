import { Injectable } from '../../../../node_modules/@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';
import { NewUser } from './new-user';

const API:string = 'http://localhost:3000';

@Injectable()
//Service do signup
export class SignUpService{
    constructor(private http: HttpClient){}

    //metodo para validar se existe outro userName na api
    checkUserNameTaken(userName: string) {
        return this.http.get(`${API}/user/exists/${userName}`);
    }

    signup(newUser: NewUser){
        return this.http.post(`${API}/user/signup`, newUser);
    }
}