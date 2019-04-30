import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'The Remy Recipe', 
            'This is a test', 'https://morefunforyou.com/wp-content/uploads/2014/05/remy-lacroix-have-a-beautiful-round-ass.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French fries', 20)
            ]),
        new Recipe(
            'The Mia Milk Recipe', 
            'This is a test', 'https://gals.kindgirls.com/d3/mia_malkova_85854/mia_malkova_85854_6.jpg',
            [
                new Ingredient('Carrot', 5),
                new Ingredient('kiwi' ,6),
                new Ingredient('Sausage' ,3)
            ]),
        new Recipe(
            'The Desert Recipe', 
            'This is a test', 
            'https://celeb.gate.cc/media/cache/original/upload/k/i/kira-noir-nude-16711.jpeg',
            [
                new Ingredient('Cofee beans', 50),
                new Ingredient('Vanilla Stick', 7)
            ])
    ];

    constructor(private slService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index:number){
        return this.recipes[index];
    }

    addIngredientToShoppinfList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    

}