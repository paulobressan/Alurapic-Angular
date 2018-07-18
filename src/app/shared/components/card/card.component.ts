import { Component, Input } from "../../../../../node_modules/@angular/core";

@Component({
    selector: "ap-card",
    templateUrl: "./card.component.html"
})
export class CardComponent {
    @Input() title:string = "";
}