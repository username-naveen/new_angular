import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-forms-exercise',
  templateUrl: './reactive-forms-exercise.component.html',
  styleUrls: ['./reactive-forms-exercise.component.css']
})
export class ReactiveFormsExerciseComponent implements OnInit {

  forms: FormGroup;
  statuses = ['Stable', 'Critical', 'Finished']

  constructor() { }

  ngOnInit(): void {
    this.forms = new FormGroup({
      'projectData': new FormGroup({
        'projectName': new FormControl(null, [Validators.required, this.projectNameValidator.bind(this)]),
        'email': new FormControl(null, [Validators.email, Validators.required], this.projectMailValidator),
      }),
      'projectStatus': new FormControl(this.statuses[1])
    })
  }

  projectNameValidator(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Test') {
      return {'isNotAllowed': true}
    }
    return null;
  }

  projectMailValidator(control: FormControl): Promise<any> | Observable<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value.split("@")[1] !== "gmail.com") {
          resolve({'isEmailForbidden': true})
        }
        resolve(null);
      }, 1000)
    })
  }

  onSubmit() {
    console.log(this.forms);
  }
}
