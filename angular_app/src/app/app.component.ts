import { Component, OnInit } from '@angular/core';
import { Players } from './common_storage/players.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // name = 'Naveen'; //this name is just for learning purpose of data binding you did, so don't confuse
  
  teams: Players[] = [{memberID: 1, memberName: "Naveen", memberRole: "Player", team: "A" }];
  teamA: number = 1;
  teamB: number = 1;

  /**
   * Constructors are special function. Mostly they are used to initialize something in a file
   * like creating a instance of class, variable...
   * It is called everytime, when a function gets called from the file
   */
  constructor() {
    
  }

  ngOnInit() {

  }

  teamMemberAdded(teamData: {memberName: string, memberRole: string, team: string}) {  
    if (teamData.team === 'A') {
      this.teams.push(
        new Players(
          this.teamA,
          teamData.memberName, 
          teamData.memberRole, 
          teamData.team
          ));
      this.teamA = this.teamA + 1;
    } else if (teamData.team === 'B') {
      this.teams.push(
        new Players(
          this.teamB,
          teamData.memberName, 
          teamData.memberRole, 
          teamData.team
          ));
          this.teamB = this.teamB + 1;
    } 
  
  }

  onChangeCall() {
    this.teams[0].memberName = "Okay changed";
  }

  // teamMemberRemoved(teamData: {memberName: string | undefined, memberID: number | undefined, team: string | undefined}) {
    
  // }

}
