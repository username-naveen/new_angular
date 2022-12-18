import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../shared-components/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe_detail: Recipe;

  constructor() { }

  ngOnInit(): void {
  }


}
