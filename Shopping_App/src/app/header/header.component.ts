import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: './header.component.html'
})

export class AppHeaderComponent {
    @Output() selectedFeature = new EventEmitter<string>()

    collapsed = true;

    featureSelecte(feature: string) {
        this.selectedFeature.emit(feature)
    }

    constructor() {

    }
}