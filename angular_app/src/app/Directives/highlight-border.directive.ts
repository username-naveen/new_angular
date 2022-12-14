//hostlistner https://github.com/angular/angular/blob/main/packages/compiler/src/schema/dom_element_schema_registry.ts#L78

import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightBorder]'
})
export class HighlightBorderDirective {

  constructor(public el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    // this.highlight('');
    const e = this.el.nativeElement.style;
    e.scale = "110%";
    e.transition = '0.5s';
  }

  @HostListener('mouseleave') onmouseleave() {
    // this.highlight('');
    const e = this.el.nativeElement.style;
    e.scale = "";
    e.transition = '0.5s';
  }

  @HostListener('window:keyup.arrowup') onkeyup() {
    // this.highlight('yellow');
    const e = this.el.nativeElement.style;
    e.border = '10px solid rgba(25, 25, 25, 0.1)';
    e.transition = '0.5s';
    // e.scale = '105%';
    // e.opacity = '1';
  }

  @HostListener('window:keyup.arrowdown') onkeydown() {
    // this.highlight('');
    const e = this.el.nativeElement.style;
    e.transition = '2s';
    e.border = '0px';
    // e.scale = '';
    // e.opacity = '0';
    
  }

  // private highlight(color: string) {
  //   const e = this.el.nativeElement.style;
  //   // e.backgroundColor = color;
  //   e.transition = '0.5s';
  //   e.border = '';
  //   console.log('hig');
  // } 
}
