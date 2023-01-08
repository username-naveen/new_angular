import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

import { Recipe } from '../../shared-components/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes_list: Recipe[];

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.recipes_list = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.activeRoute})
  }

}
