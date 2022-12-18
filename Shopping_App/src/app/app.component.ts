import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopping_App';

  featureSelect: string = 'recipes';
  isRecipes: boolean = true;

  navigateTo(feature: string) {
    this.featureSelect = feature;
    this.isRecipes = feature === 'recipes';
  }
}
