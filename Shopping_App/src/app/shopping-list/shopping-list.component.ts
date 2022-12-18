import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared-components/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('Apples', 5),
    new Ingredients('Mangoes', 6)
  ];

  addedRecipe(recipeAdded: Ingredients) {
    this.ingredients.push(recipeAdded);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
