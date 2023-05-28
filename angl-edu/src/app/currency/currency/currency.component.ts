import { Component } from '@angular/core';
import { CurrencyService } from './../currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent {
  codes = ['INR', 'USD', "CAD"];
  constructor(private currenctService:CurrencyService) {}

  update(event: Event) {
    const ele = event.target as HTMLSelectElement;
    this.currenctService.changeCurrency(ele.value)
  }
}
