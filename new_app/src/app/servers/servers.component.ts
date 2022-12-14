import { Component, OnInit } from '@angular/core';

@Component({
  /*** Selectors can be written in many formats***/

  /** using '' allows you to use as tags: <app-servers></app-servers> */
  selector: 'app-servers',

  /** using . allows you to use as class: <sometag class="app-servers"> */
  // selector: '.app-servers',

  /** using [] allows you to use as params in tags: <h1 app-servers> */
  // selector: '[app-servers]',

  /* ---template:  is for inline commands--- */
  // template: '<app-server></app-server><app-server></app-server>',

  /* ---templateUrl: is for pointing a external file--- */
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  isServerOnline = false;
  isServerCreated = "No server created yet.";
  serverName = 'SentinelOne';
  serverAddorRem = "Add Server"
  isAdd = true;
  servers = ['Server 1', 'Server 2'];

  constructor() { 
    setTimeout( () => {
      this.isServerOnline = true;
    }, 2000)
  }

  ngOnInit(): void {
  }
  
  onServerCreate() {
    this.isAdd = true;
    this.servers.push(this.serverName);    
    this.isServerCreated = "A server created now.";
  }

  updateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  updateBtn() {
    if (this.isAdd) {
      this.serverAddorRem = "Remove Server";
      this.isAdd = false;
    } else {
      this.serverAddorRem = "Add Server";
      this.isAdd = true;
    }
    
  }
}
