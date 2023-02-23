import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyComponent } from './currency/currency.component';
import { CurrencyService } from './currency.service';

@NgModule({
  declarations: [
    CurrencyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CurrencyComponent
  ]
})
export class CurrencyModule {
  static forRoot(): ModuleWithProviders<CurrencyModule> {
    return {
      ngModule: CurrencyModule,
      providers: [CurrencyService]
    }
  }
}
