import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-assignment-ii',
  templateUrl: './basic-assignment-ii.component.html',
  styleUrls: ['./basic-assignment-ii.component.css']
})
export class BasicAssignmentIiComponent implements OnInit {
  userName: string  = "";
  btnEnable: boolean = false;

  setUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

  updateBtn() {
    if (this.userName != "") {
      return this.btnEnable = true
    }
  }

  resetUserName() {
    this.userName = "";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
