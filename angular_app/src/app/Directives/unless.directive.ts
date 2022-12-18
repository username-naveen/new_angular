import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}


/**
 * this is a structural directive like *ngFor or *ngIf.
 * there are two properties required here,
 * 1. the element that you want to have effect of this -- teamplateRef
 * 2. the place where it should get seen or removed -- vcRef
 * You have to create or set a method that can take a boolean values (might be anything you want, this is in general use)
 * 
 * Note: This method should have the same name as the selector. Else, in the HTML it will throw a error saying
 * 'this * is not a property of the * element'
 */