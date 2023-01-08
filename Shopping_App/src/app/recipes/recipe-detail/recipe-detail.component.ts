import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../../shared-components/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe_detail: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private activeRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe_detail = this.recipeService.getRecipe(this.id);
      }
    )
  }

  onAddIngredientsToSL() {
    this.recipeService.addIngredientsToShoppingList(this.recipe_detail.ingredients);
  }
}
