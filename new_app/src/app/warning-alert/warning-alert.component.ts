import { Component } from "@angular/core";

@Component({
    selector: 'warning-alert',
    template: `
        <p>This is a warning. Please abort!!!</p>
    `,
    styles: [`
    p {
        padding: 20px;
        color: rose;
        border: 2px solid red;
        background-color: #EC60A1;
        font-weight: bold;
        
    }`]
})

export class WarningComponent{

}