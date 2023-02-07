import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingListService } from '../services/shopping-list.service';
import { Ingredients } from '../shared-components/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredients[];
  shoppingSubs: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingSubs = this.shoppingListService.newIngredientAdded
    .subscribe((ingredient: Ingredients[]) => {
      this.ingredients = ingredient;
    })
  }

  onEditIngredient(index: number) {
    this.shoppingListService.ingredientEdit.next(index);
  }

  ngOnDestroy(): void {
      this.shoppingSubs.unsubscribe();
  }

}
