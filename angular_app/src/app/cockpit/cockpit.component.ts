import { Component, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None, Native -- extra options
})
export class CockpitComponent implements OnInit {

  // input and output decorators
  @Output('TeamData') onMoonTeamAdded = new EventEmitter<{memberName: string, memberRole: string, team: string}>();
  // @Output('BTeam') onSunTeamAdded = new EventEmitter<{memberName: string, memberRole: string, team: string}>();

  @ViewChild('teamName') teamNameElement;
  @ViewChild('memberRole') memberRoleElement;


  // variable declarations
  inputMember: string = ''; 
  playerRoles: string[] = ['Captain', 'Vice Captain', 'Player'];
  teams: string[] = ['A', 'B'];

  

  constructor() { }

  ngOnInit(): void {
  }

  // functions

  addToTeam(teamName: HTMLSelectElement, playerRole: HTMLSelectElement) {

    // access values thru ViewChild decorator
    // console.log(this.teamNameElement.nativeElement.value);
    
    this.onMoonTeamAdded.emit({
      memberName: (this.inputMember).toUpperCase(), 
      memberRole: playerRole.value, 
      team: teamName.value
    });
    this.emptyInputs();
  }

  // addToTeamB() {    
  //   this.onMoonTeamAdded.emit({
  //     memberName: (this.inputMember).toUpperCase(), 
  //     memberRole: this.inputRole, 
  //     team: this.inputTeam[1]
  //   });
  //   this.emptyInputs();
  // }

  // showTeams() {    
    // this.onSunTeamAdded.emit({
    //   memberName: this.inputMember, 
    //   memberID:  this.inputID, 
    //   team: this.inputTeam
    // });
    // this.emptyInputs();
  // }

  public emptyInputs() {
    this.inputMember = '';
  }

}
