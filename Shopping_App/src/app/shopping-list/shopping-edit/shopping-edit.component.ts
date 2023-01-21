import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  
  addRecipe(f: NgForm) {
    this.shoppingListService.addIngredient(new Ingredients(f.control.get('recipe-name').value, f.control.get('amount').value));  
  }
}
