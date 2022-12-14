import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
  p {
    color: blue;
    }
  `]
})
export class AppComponent {
  name = 'Naveen';
}
