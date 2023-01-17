import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, FormControl, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[dateValidator][formControlName],[dateValidator][formControl],[dateValidator][ngModel]',
  providers: [{
    provide: NG_VALIDATORS, 
    useExisting: forwardRef(() => DateValidatorDirective),
    multi: true,
  }]
})
export class DateValidatorDirective {

  constructor() {}

  // validate(control: FormControl): {[s: string]: any} {
  //   const fromDate = control.value.fromDate;
  //   const toDate = control.value.toDate;

  //   if (!fromDate || !toDate) {
  //     return null;
  //   }
  //   console.log(control);
    

  //   if (toDate <= fromDate) {
  //     return {
  //       dateValidator: true
  //     };
  //   }

  //   return null;
  // }
  validate(control: FormControl) {
    const fromDate = new Date(control.parent.get('fromDate').value);
    const toDate = new Date(control.value);
    if (fromDate && toDate && fromDate > toDate) {
      return { date: true };
    }
    return null;
  }
  

}
