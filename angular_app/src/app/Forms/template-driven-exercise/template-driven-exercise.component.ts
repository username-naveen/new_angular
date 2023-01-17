import { Component, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-template-driven-exercise',
  templateUrl: './template-driven-exercise.component.html',
  styleUrls: ['./template-driven-exercise.component.css']
})
export class TemplateDrivenExerciseComponent implements OnInit {

  @ViewChild('f') form: NgForm;
  @ViewChild('dates') dates: NgModel;
  dateVa: any;

  fromDate: Date;
  toDate: Date;
  subscriptions: string[] = ['Basic', 'Advanced', 'Pro'];
  defaultPlan: string = 'Advanced';
  submitted = false;
  endDateValidator: any;

  user = {
    email: '',
    plan: this.defaultPlan,
  }

  constructor() { }

  ngOnInit(): void {
    
  }
  
  onSubmit() {
    this.submitted = true;
    this.user.email = this.form.value.userData.email;
    this.user.plan = this.form.value.userData.plan;
  }

}
