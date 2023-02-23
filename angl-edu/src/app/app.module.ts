import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyModule } from './currency/currency.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
  HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    CurrencyModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
