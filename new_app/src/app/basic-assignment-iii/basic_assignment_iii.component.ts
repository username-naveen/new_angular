import { Component } from "@angular/core";

@Component({
    selector: 'basic-assignment-iii',
    templateUrl: './basic_assignment_iii.component.html',
    styles: [`
    .white-text {
        color: white;
    }
    `]
})

export class BasicAssignmentIiiComponent {
    counter = [];
    toggleDisplay = false;
    clickCount() {
        this.counter.push(this.counter.length+1);
    }

    constructor() {

    }

}