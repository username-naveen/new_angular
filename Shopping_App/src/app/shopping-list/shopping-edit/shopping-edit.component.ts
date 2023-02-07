import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredients } from 'src/app/shared-components/ingredients.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm; 
  subscription: Subscription;
  editMode: boolean = false;
  editIngredientIndex: number;
  editIngredient: Ingredients

  constructor(private shoppingListService: ShoppingListService) { }
  
  ngOnInit(): void {
    this.subscription = this.shoppingListService.ingredientEdit.subscribe(
      (index: number) => {
        this.editIngredientIndex = index;
        this.editMode = true;
        this.editIngredient = this.shoppingListService.getIngredientByIndex(this.editIngredientIndex);
        this.slForm.setValue({
          recipe_name: this.editIngredient.name,
          amount: this.editIngredient.amount
        })
      }
    )
  }
  
  addRecipe(f: NgForm) {
    const value = f.value;
    const newIngredient = new Ingredients(value.recipe_name, value.amount)
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editIngredientIndex, newIngredient)
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    f.reset();
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
