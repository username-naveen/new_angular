import { Subject } from "rxjs";
import { Ingredients } from "../shared-components/ingredients.model";

export class ShoppingListService {
    newIngredientAdded = new Subject<Ingredients[]>();
    ingredientEdit = new Subject<number>();
    private ingredients: Ingredients[] = [
        new Ingredients('Apples', 5),
        new Ingredients('Mangoes', 6)
    ];

    getIngredients() {
        return this.ingredients.slice();
    };

    getIngredientByIndex(index: number) {
        return this.ingredients[index];
    }
    
    // you might think that why we are emitting this.ingredients from here
    // while we have getIngredients. This is because, the slice method copies the 
    // property to it and when we add something to it, it might not get updated 
    // So, to specify Angular to know that a new addition is happened here, 
    // we can use this emitter and send again a new slice of the property
    addIngredient(ingredient: Ingredients) {
        this.ingredients.push(ingredient);
        // this.newIngredientAdded.emit(this.ingredients.slice());
        this.newIngredientAdded.next(this.ingredients.slice());
    }

    // the next is used when we use Subject from rxjs, instead of EventEmitter
    
    addIngredients(ingredients: Ingredients[]) {
        this.ingredients.push(...ingredients);
        // this.newIngredientAdded.emit(this.ingredients.slice());
        this.newIngredientAdded.next(this.ingredients.slice());
    }

    updateIngredient(index: number, updatedIngredient: Ingredients) {
        this.ingredients[index] = updatedIngredient;
        this.newIngredientAdded.next(this.ingredients.slice());
    }

    removeIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.newIngredientAdded.next(this.ingredients.slice());
    }

}