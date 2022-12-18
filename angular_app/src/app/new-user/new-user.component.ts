import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  @Output() sendUserData = new EventEmitter<{userName: string, userRole: string}>();

  accessRoles: string[] = ['Admin', 'User', 'Public'];
  isAdmin: boolean = false;
  showError: boolean = false;

  submitUserData(userName: HTMLInputElement, selectedAccessRole: HTMLSelectElement) {
    if (userName.value !== '' && selectedAccessRole.value !== '') {
      this.sendUserData.emit({
        userName: userName.value,
        userRole: selectedAccessRole.value
      });
      userName.value = '';
      selectedAccessRole.value = '';
    } else {
      this.showError = true;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
