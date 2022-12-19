import { Component, OnInit } from '@angular/core';
// import { Players } from './common_storage/players.model';
// import { UserData } from './common_storage/userData.model';
// import { AccountsService } from './services/accountsService.service';
import { UsersService } from './services/usersService.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  // name = 'Naveen'; //this name is just for learning purpose of data binding you did, so don't confuse
  
  // 13 - 15 network component and cockpit 
  // teams: Players[] = [{memberID: 1, memberName: "Naveen", memberRole: "Player", team: "A" }];
  // teamA: number = 1;
  // teamB: number = 1;

  // value: number;

  // userData: UserData[] = [];
  

  /**
   * Constructors are special function. Mostly they are used to initialize something in a file
   * like creating a instance of class, variable...
   * It is called everytime, when a function gets called from the file
   */
  // constructor(private AccountsService: AccountsService) {
    
  // }

  // ngOnInit() {
  //     this.userData = this.AccountsService.userData;
  // }

  // Below 34 - 80 are for dropdown selection

  // dropdownList;
  // dropdownSettings;

  // isAdminReportEnabled: boolean;
  // isInteractiveReportEnabled: boolean;

  // ngOnInit() {

  //   this.isAdminReportEnabled = false;
  //   this.isInteractiveReportEnabled = false;

  //   this.dropdownList = this.getData();

  //   this.dropdownSettings = {
  //     singleSelection: false,
  //     idField: 'item_id',
  //     textField: 'item_text',
  //     selectAllText: 'Select All',
  //     unSelectAllText: 'Unselect All'
  //   };
  // }

  // getData() {
  //   return [
  //     {item_id: 1, item_text: 'Admin Reporting'},
  //     {item_id: 2, item_text: 'Interactive Reporting'},
  //   ]
  // }

  // toggleFeature(event: any) {
    
  //   if (event.item_id === 1) {
  //     this.isAdminReportEnabled = !this.isAdminReportEnabled;
  //   }
  //   if (event.item_id === 2) {
  //     this.isInteractiveReportEnabled = !this.isInteractiveReportEnabled;
  //   } 
  // }

  // toggleFeatures(event: any) {
  //     this.isAdminReportEnabled = !this.isAdminReportEnabled;
  //     this.isInteractiveReportEnabled = !this.isInteractiveReportEnabled;
  // }


  // network component and cockpit
  // teamMemberAdded(teamData: {memberName: string, memberRole: string, team: string}) {  
  //   if (teamData.team === 'A') {
  //     this.teams.push(
  //       new Players(
  //         this.teamA,
  //         teamData.memberName, 
  //         teamData.memberRole, 
  //         teamData.team
  //         ));
  //     this.teamA = this.teamA + 1;
  //   } else if (teamData.team === 'B') {
  //     this.teams.push(
  //       new Players(
  //         this.teamB,
  //         teamData.memberName, 
  //         teamData.memberRole, 
  //         teamData.team
  //         ));
  //         this.teamB = this.teamB + 1;
  //   } 
  
  // }

  // onChangeCall() {
  //   this.teams[0].memberName = "Okay changed";
  // }

  // teamMemberRemoved(teamData: {memberName: string | undefined, memberID: number | undefined, team: string | undefined}) {
    
  // }

  constructor() { }
  
  ngOnInit() {
  }
}
