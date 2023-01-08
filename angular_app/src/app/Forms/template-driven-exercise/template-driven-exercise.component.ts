import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-exercise',
  templateUrl: './template-driven-exercise.component.html',
  styleUrls: ['./template-driven-exercise.component.css']
})
export class TemplateDrivenExerciseComponent implements OnInit {

  @ViewChild('f') form: NgForm;

  subscriptions: string[] = ['Basic', 'Advanced', 'Pro'];
  defaultPlan: string = 'Advanced';
  submitted = false;

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
