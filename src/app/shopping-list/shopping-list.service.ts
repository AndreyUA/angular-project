import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.module';

export class ShoppingListService {
  // ingredientsChanged = new EventEmitter<Array<Ingredient>>();
  ingredientsChanged = new Subject<Array<Ingredient>>();

  startedEditing = new Subject<number>();

  private ingredients: Array<Ingredient> = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Array<Ingredient>) {
    // Bad solution
    // ingredients.forEach((ingredient) => this.addIngredient(ingredient));

    // Better solution
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
