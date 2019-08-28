import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
    private recipes: Recipe[] = [
        {
          id: 'r1',
          title: 'Gado-gado',
          imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/05/gado-gado-salad.jpg?itok=MTTSriC8',
          ingredients: ['Lontong', 'Sawi', 'Bumbu Kecap', 'Tauge']
        },
        {
          id: 'r2',
          title: 'Salt & Pepper Chips',
          imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/07/salt-and-pepper-chips.jpg?itok=f9M8I7V7',
          ingredients: ['Kentang', 'Paprika', 'Bawang Putih', 'Cabe']
        },
        {
          id: 'r3',
          title: 'Pizza Margherita',
          imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--193739_12.jpg?itok=cuLNDrcF',
          ingredients: ['Tepung', 'Ragi', 'Tomat', 'Keju Mozzarella']
        }
      ]

    constructor() { }

    getAllRecipes(){
        return [...this.recipes];
    }

    getRecipe(recipeId: string){
        return {
            ...this.recipes.find(recipe =>{
                return recipe.id === recipeId;
            })
        };
    }

    deleteRecipe(recipeId: string){
        this.recipes = this.recipes.filter(
            recipe => {
                return recipe.id != recipeId;
            }
        )
    }
}
