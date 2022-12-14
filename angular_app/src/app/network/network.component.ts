import { AfterContentInit, AfterViewChecked, Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit, OnChanges, AfterContentInit, AfterViewChecked {

  /**
   * sometimes while initializing a property, you might get a error message saying 
   * 'property has not initialized'. This might happen when 'strict' mode is on.
   * To disable it, just go to tsconfig.json and make it false
   */

  @Input('teamMembers') member: {memberName: string, memberID: number, team: string};
  @Input() memberName: string;

  constructor() { 
    console.log('Constructor Called');
  }

  ngOnInit() {
    console.log('ngOnInit Called');
  }

  ngOnChanges() {
    console.log('ngOnChanges Called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit Called');  
  }

  ngAfterViewChecked() {

  }

}
