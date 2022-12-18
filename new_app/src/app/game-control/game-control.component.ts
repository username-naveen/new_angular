import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

  @Output("anEvent") event = new EventEmitter<number>();

  numberPass: number = 0;
  generateNumber;

  constructor() {

  }

  initializeGame() {
    this.generateNumber = setInterval(() => {
    this.event.emit(this.numberPass+1);
    this.numberPass++;
  }, 1000);
    
  }

  terminateGame() {
    clearInterval(this.generateNumber);
  }
}
