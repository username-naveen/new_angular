import { Component, Input, OnInit } from '@angular/core';
import { UserData } from '../common_storage/userData.model';
import { LoggingService } from '../services/loggingService.service';
import { AccountsService } from '../services/accountsService.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
})
export class AccountsComponent implements OnInit {

  @Input() userData: UserData;
  @Input() id: number;

  ngOnInit() { 
  }

  constructor(
    private LoggingService: LoggingService,
    private AccountsSerive: AccountsService) {}

  onSetTo(status: string) {
    this.AccountsSerive.updateStatus(this.id, status);
    this.AccountsSerive.statusUpdate.emit(status);
    // this.LoggingService.logStatus(status);
  }

}
