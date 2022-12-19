import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../services/loggingService.service';
import { AccountsService } from '../services/accountsService.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
  providers: [LoggingService]
})
export class NewUserComponent implements OnInit {


  addUser(userName: string, userStatus: string) {
    this.AccountsService.addNewUser(userName, userStatus);
    // this.LoggingService.logStatus(userStatus);
  }

  constructor(
    private LoggingService: LoggingService,
    private AccountsService: AccountsService) {
      this.AccountsService.statusUpdate.subscribe(
        (status: string) => alert('Status updated to ' + status)
      )
    }

  ngOnInit(): void {
  }

}
