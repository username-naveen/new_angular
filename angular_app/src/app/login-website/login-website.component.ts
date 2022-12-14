import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-website',
  templateUrl: './login-website.component.html',
  styleUrls: ['./login-website.component.css']
})

export class LoginWebsiteComponent  {
  

  username: string = "";
  password: string = "";
  show: boolean = false;
  submit() {
    console.log("User name is " + this.username);
    this.clear();
  }

  clear() {
    this.username = "";
    this.password = "";
    this.show = true;
  }
}
