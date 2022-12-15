import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

  @Output("anEvent") event = new EventEmitter<{arrayOfNumber: number[]}>();

  arrayOfNumber: number[] = [];
  generateNumber;

  constructor() {

  }

  initializeGame() {
    this.generateNumber = setInterval(() => this.arrayOfNumber.push(this.arrayOfNumber.length + 1), 1000)
    this.event.emit({arrayOfNumber: this.arrayOfNumber});
  }

  terminateGame() {
    clearInterval(this.generateNumber);
  }
}
