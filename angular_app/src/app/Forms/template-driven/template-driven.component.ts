import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

    /** FORMS IN ANGULAR */

    @ViewChild('f') form: NgForm;
    @ViewChild('email') emailId: NgModel;
    exampleMail: String ='not@test.com'; 
    answer = '';
    genders: string[] = ['male', 'female'];
  
    user = {
      username: '',
      email: '',
      gender: '',
      secretQuestion: '',
      questionAnswer: '',
    }
    submitted = false;
  
    suggestUserName() {
      const suggestedName = 'Superuser';
      // this.form.setValue({
      //   userData: {
      //     username: suggestedName
      //   },
      //   questionAnswer: '',
      //   secret: ''
      // })
  
      // the reason because it is not advisable to use setValue() method
      // is that when you use that, you need to give all the properties 
      // that are in the form, which is also not a proper approach.
      // You can use patchValue() from the form. Like
  
      this.form.form.patchValue({
        userData: {
          username: suggestedName
        }
      })
    }
  
    onSubmit() {
      this.submitted = true;
      this.user.username = this.form.value.userData.username;
      this.user.email = this.form.value.userData.email;
      this.user.gender = this.form.value.gender;
      this.user.secretQuestion = this.form.value.secret;
      this.user.questionAnswer = this.form.value.questionAnswer;
    }
  
    constructor() { }
    
    ngOnInit() {
    }
  

}
