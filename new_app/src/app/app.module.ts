import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import { SuccessComponent } from "./success-alert/success.component";
import { WarningComponent } from './warning-alert/warning-alert.component';
import { BasicAssignmentIiComponent } from './basic-assignment-ii/basic-assignment-ii.component';
import { BasicAssignmentIiiComponent } from "./basic-assignment-iii/basic_assignment_iii.component";
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { InterDropdownComponent } from './inter-dropdown/inter-dropdown.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessComponent,
    WarningComponent,
    BasicAssignmentIiComponent,
    BasicAssignmentIiiComponent,
    EmployeesListComponent,
    InterDropdownComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
