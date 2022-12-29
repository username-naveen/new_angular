import { EventEmitter, Injectable } from "@angular/core";
import { Ingredients } from "../shared-components/ingredients.model";
import { Recipe } from "../shared-components/recipe.model";
import { ShoppingListService } from "./shopping-list.service";

@Injectable()
export class RecipeService {

    constructor(private shoppinListService: ShoppingListService) {

    }

    recipeSelected = new EventEmitter<Recipe>()

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

    addIngredientsToShoppingList(ingredients: Ingredients[]) {
        this.shoppinListService.addIngredients(ingredients);
    }
}