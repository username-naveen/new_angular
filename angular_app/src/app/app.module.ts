import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { ServerComponent } from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import { SuccessComponent } from "./success-alert/success.component";
import { WarningComponent } from './warning-alert/warning-alert.component';
import { LoginWebsiteComponent } from './login-website/login-website.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { HighlightBorderDirective } from './Directives/highlight-border.directive';
import { HighlightsComponent } from './image-highlights/highlights.component';
import { OneImageComponent } from './one-image/one-image.component';
import { NetworkComponent } from './network/network.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { BetterHighlight } from './Directives/better-highlight.directive';
import { UnlessDirective } from './Directives/unless.directive';
import { NewUserComponent } from './new-user/new-user.component';
import { AccountsComponent } from './accounts/accounts.component';
import { DropDownDirective } from './Directives/drop-down.directive';
import { DropdownComponent } from './dropdown/dropdown.component'; 
import { AccountsService } from './services/accountsService.service';
import { LoggingService } from './services/loggingService.service';
import { UsersService } from './services/usersService.service';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { CounterService } from './services/counterService.service';
import { ReportsComponent } from './reports/reports.component';
import { TokenInterceptor } from './services/api-interceptor.service';
import { TemplateDrivenComponent } from './Forms/template-driven/template-driven.component';
import { TemplateDrivenExerciseComponent } from './Forms/template-driven-exercise/template-driven-exercise.component';
import { ReactiveFormsComponent } from './Forms/reactive-forms/reactive-forms.component';
import { ReactiveFormsExerciseComponent } from './Forms/reactive-forms-exercise/reactive-forms-exercise.component';
import { DateValidatorDirective } from './Directives/date-validator.directive';

const matmodules = [
  MatDatepickerModule,
  MatButtonModule, 
  MatFormFieldModule,
  MatInputModule,
];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessComponent,
    WarningComponent,
    LoginWebsiteComponent,
    EmployeesListComponent,
    HighlightBorderDirective,
    HighlightsComponent,
    OneImageComponent,
    NetworkComponent,
    CockpitComponent,
    ImageSliderComponent,
    BetterHighlight,
    UnlessDirective,
    NewUserComponent,
    AccountsComponent,
    DropDownDirective,
    DropdownComponent,
    InactiveUsersComponent, 
    ActiveUsersComponent, 
    ReportsComponent, 
    TemplateDrivenComponent, 
    TemplateDrivenExerciseComponent, 
    ReactiveFormsComponent, ReactiveFormsExerciseComponent, DateValidatorDirective,
  ],
  imports: [
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
  ],
  exports: [
    ...matmodules
  ],
  providers: [{

    provide: HTTP_INTERCEPTORS,

    useClass: TokenInterceptor,

    multi: true

   }, AccountsService, LoggingService, UsersService, CounterService ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
