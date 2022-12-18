import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { UserData } from '../common_storage/userData.model';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
})
export class AccountsComponent implements OnInit {

  @ViewChild('adminReporting') adminReporting;
  @ViewChild('interactiveReporting') interactiveReporting;

  @Input() userData: UserData;

  isAdminReportEnabled: boolean = false;
  isInteractiveReportingEnabled: boolean = false;

  ngOnInit() {
    this.isAdminReportEnabled = false;
    this.isInteractiveReportingEnabled = false;  
  }

  enableFeatures() {
    if (this.adminReporting.nativeElement.checked === true) {
      this.isAdminReportEnabled = true;
    }
    if (this.interactiveReporting.nativeElement.checked === true) {
      this.isInteractiveReportingEnabled = true;
    }
    // if (this.adminReporting.nativeElement.checked === false) {
    //   this.isAdminReportEnabled = false;
    // }
    // if (this.interactiveReporting.nativeElement.checked === false) {
    //   this.isInteractiveReportingEnabled = false;
    // }
  }
}
