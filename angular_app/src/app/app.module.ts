import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


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

const matmodules = [
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
    ImageSliderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ...matmodules
  ],
  exports: [
    ...matmodules
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
