import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[better-highlight]',
})

export class BetterHighlight implements OnInit{
    constructor(private elRef: ElementRef, private renderer: Renderer2) {

    }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.renderer.setStyle(this.elRef.nativeElement, 'background', 'green')
    }
}