import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Array<Ingredient>>();

  private ingredients: Array<Ingredient> = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
