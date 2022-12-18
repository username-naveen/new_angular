import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles: [`
  // p {
  //   color: blue;
  //   }
  // `]
})
export class AppComponent {
  // name = 'Naveen';

  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  onEventFired(theNumber: number) {
    console.log(theNumber);
    
    if (theNumber % 2 === 0) {
      this.evenNumbers.push(theNumber)
    } else {
      this.oddNumbers.push(theNumber);
    }
    
  }
}
