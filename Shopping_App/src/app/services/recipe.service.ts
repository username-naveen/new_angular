import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredients } from "../shared-components/ingredients.model";
import { Recipe } from "../shared-components/recipe.model";
import { ShoppingListService } from "./shopping-list.service";

@Injectable({
    providedIn: 'root'
})
export class RecipeService {

    recipeChanged = new Subject<Recipe[]>();

    constructor(private shoppinListService: ShoppingListService) {

    }

    private recipes_list: Recipe[] = [ 
        new Recipe(
            'Chicken Briyani', 
            'Briyani made of Basmasti rice, mix of various spicy ingredients, with sprinkles of Cashews and Dry Grapes, and of course, the Chicken piece...😋', 
            'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1488&q=80',
            [
                new Ingredients('Basmati Rice (1Kg)', 1), 
                new Ingredients('Chilli Powder (100g)', 1),
                new Ingredients('Ginger Garlic Paste (50g)', 1),
                new Ingredients('Dry Fruits and Nuts (250g)', 1),
                new Ingredients('Chicken thigh + breast (1Kg)', 1),
            ]),
        new Recipe(
            'Chicken spicy fry', 
            'Chicken that marinated with finely grained garlic, chilli and cardomon powder, fried on a moderated flame, topped with some vegetable leaves and pomogrenate', 
            'https://www.onmanorama.com/content/dam/mm/en/food/recipe/images/2021/1/10/chicken-chukka.jpg.transform/845x440/image.jpg',
            [
                new Ingredients('Basmati Rice (1Kg)', 1), 
                new Ingredients('Chilli Powder (100g)', 1),
                new Ingredients('Ginger Garlic Paste (50g)', 1),
                new Ingredients('Chicken chops (500g)', 1),                
            ]),
    ];

    getRecipes() {
        return this.recipes_list.slice();
    }

    getRecipe(index: number) {
        return this.recipes_list[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredients[]) {
        this.shoppinListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes_list.push(recipe);
        this.recipeChanged.next(this.recipes_list.slice());
    }
    
    updateRecipe(id: number, newRecipe: Recipe) {
        this.recipes_list[id] = newRecipe;
        this.recipeChanged.next(this.recipes_list.slice());
    }

    deleteRecipe(id: number) {
        this.recipes_list.splice(id, 1);
        this.recipeChanged.next(this.recipes_list.slice());
    }
}