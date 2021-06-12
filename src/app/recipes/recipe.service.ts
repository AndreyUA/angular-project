import { Recipe } from './recipe.module';

export class RecipeService {
  private recipes: Array<Recipe> = [
    new Recipe(
      'A test recipe 1',
      'Just a test 1',
      'https://realfood.tesco.com/media/images/Ritas-enchiladas-recipe-1400x919-1c7ff22b-ea5e-44cf-9ada-d7b04420002f-0-1400x919.jpg'
    ),
    new Recipe(
      'A test recipe 2',
      'Just a test 2',
      'https://realfood.tesco.com/media/images/Ritas-enchiladas-recipe-1400x919-1c7ff22b-ea5e-44cf-9ada-d7b04420002f-0-1400x919.jpg'
    ),
  ];

  getRecipes(): Array<Recipe> {
    // Method slice give as 'notification'
    // if we changed property this.recipe
    return this.recipes.slice();
  }
}
