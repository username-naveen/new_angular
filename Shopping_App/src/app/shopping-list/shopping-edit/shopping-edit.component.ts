import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared-components/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('recipeName') recipeName: ElementRef;
  @ViewChild('recipeAmount') recipeAmount: ElementRef;
  @Output() recipeAdded = new EventEmitter<Ingredients>();

  addRecipe() {
    this.recipeAdded.emit({name: this.recipeName.nativeElement.value, amount: this.recipeAmount.nativeElement.value});
    this.recipeName.nativeElement.value = '';
    this.recipeAmount.nativeElement.value = null;   
  }
  constructor() { }

  ngOnInit(): void {
  }

}
