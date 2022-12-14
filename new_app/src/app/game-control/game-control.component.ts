import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

  @Output("anEvent") anEvent;
  constructor() {

  }

  initializeGame() {
    this.anEvent =
    setInterval(() => {

    }, 1000)
  }

  terminateGame() {
    clearInterval(this.anEvent);
  }
}
