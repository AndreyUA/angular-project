import { Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.module';

import { Recipe } from './recipe.module';

import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  constructor(private shoppingListService: ShoppingListService) {}

  private recipes: Array<Recipe> = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty schnitzel - just awesome',
      '../../assets/schnitzel.jpg',
      [new Ingredient('Meat', 6), new Ingredient('French Fries', 42)]
    ),
    new Recipe(
      'Big fat burger',
      'What else you need to say?',
      '../../assets/burger.jpg',
      [new Ingredient('Buns', 3), new Ingredient('Meat', 2)]
    ),
  ];

  getRecipes(): Array<Recipe> {
    // Method slice give as 'notification'
    // if we changed property this.recipe
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Array<Ingredient>) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
