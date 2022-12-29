import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredients } from 'src/app/shared-components/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }
  
  ngOnInit(): void {
  }
  
  addRecipe(recipeName: string, recipeAmount: number) {
    this.shoppingListService.addIngredient(new Ingredients(recipeName, recipeAmount));  
  }
}
