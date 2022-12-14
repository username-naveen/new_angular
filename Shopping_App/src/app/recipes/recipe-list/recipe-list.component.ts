import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipe_list: Recipe[] = [ 
    new Recipe('Potato', 'This is a potato.', 'https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
    new Recipe('Onion', 'This is a onion', 'https://images.pexels.com/photos/144206/pexels-photo-144206.jpeg?auto=compress&cs=tinysrgb&w=1600'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
