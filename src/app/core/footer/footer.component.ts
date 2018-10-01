import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { UserService } from "../user/user.service";
import { User } from "../user/user";

@Component({
    selector: 'ap-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
    user$:Observable<User>;

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        //Capturando o usuário que esta logago
        //Vamos utilizar o Async para que o angular gerencie o subscribe
        this.user$ = this.userService.getUser();
    }
}