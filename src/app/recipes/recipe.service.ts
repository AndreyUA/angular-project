import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.module';

import { Recipe } from './recipe.module';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Array<Recipe> = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty schnitzel - just awesome',
      'https://497543-1573563-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2021/01/german-schnitzel-on-plate.jpg',
      [new Ingredient('Meat', 6), new Ingredient('French Fries', 42)]
    ),
    new Recipe(
      'Big fat burger',
      'What else you need to say?',
      'https://nevafood.ru/wp-content/uploads/2017/07/burger-ayam.jpg',
      [new Ingredient('Buns', 3), new Ingredient('Meat', 2)]
    ),
  ];

  getRecipes(): Array<Recipe> {
    // Method slice give as 'notification'
    // if we changed property this.recipe
    return this.recipes.slice();
  }
}
