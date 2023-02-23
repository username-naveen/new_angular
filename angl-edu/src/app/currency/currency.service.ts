import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable()
export class CurrencyService {

  
  private _code = 'INR';
  // private currencySubject = new Subject<string>();
  // Subjects only gives the next data not the initial data
  private currencySubject = new BehaviorSubject<string>(this._code);

  currencyObservable$: Observable<string>;
  
  constructor() { 
    this.currencyObservable$ = this.currencySubject.asObservable()
  }
  changeCurrency(code: string) {
    this._code = code;
    this.currencySubject.next(this._code);
  }
}
