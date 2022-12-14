import { Component } from "@angular/core";

@Component({
    selector: 'success-note',
    templateUrl: './success.component.html',
    styles: [`
    p {
        color: green;
        background-color: #89FF01;
        width: fit-content;
        font-weight: bold;
        border-radius: 5px
    }`]
})

export class SuccessComponent{

}