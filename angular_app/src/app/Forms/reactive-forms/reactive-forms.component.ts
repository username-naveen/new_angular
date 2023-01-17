import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  genders = ['male', 'female'];
  forms: FormGroup;
  forbiddenNames = ['Asaasd', 'Erge'];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.forms = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNamesValidator.bind(this)]),
        'email': new FormControl(null, [Validators.email, Validators.required], this.forbiddenEmailValidator),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    })
    this.forms.valueChanges.subscribe((values) => {
      console.log(values);
    })
    this.forms.statusChanges.subscribe((status) => {
      console.log(status);
    })
  }

  onSubmit() {
    console.log(this.forms);    
  }

  getControls() {
    return (<FormArray>this.forms.get('hobbies')).controls;
  }

  onAddHobbies() {
    const control = new FormControl(null, Validators.required);
   ( <FormArray>this.forms.get('hobbies')).push(control);
  }

  forbiddenNamesValidator(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenNames.indexOf(control.value) !== -1) {
      return {'isForbiddenName': true};
    }
    return null;
  }

  forbiddenEmailValidator(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value.split("@")[1] !== "gmail.com") {
          resolve({'isEmailForbidden': true})
        }
        resolve(null);
      }, 500)
    }
  )}
  
}
