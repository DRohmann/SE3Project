import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Ingredient } from '../models/ingredient.model';
import { Recipe } from '../models/recipe.model';
import { RecipesService } from './recipes-service/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})



export class RecipesComponent implements OnInit {

  public static DEFAULT_ID: string = "default"; //id set in firebase

  service: RecipesService;
  recipeGroup: FormGroup;
  ingredientGroup: FormGroup;
  hasIngredients: boolean;


  constructor(builder: FormBuilder) {
    this.service = new RecipesService();

    this.recipeGroup = builder.group({
      title: new FormControl(),
      text: new FormControl(),
      duration: new FormControl(),
      type: new FormControl()
    });
    this.ingredientGroup = builder.group({
      name: new FormControl(),
      amount: new FormControl(),
      unit: new FormControl(),
    });
    
    this.hasIngredients = false;
  }

  addNewIngredient(): void {
    this.hasIngredients = true;
  }

  saveRecipe(): void{
    let recipe = this.getRecipe();
    this.service.saveNewRecipe(recipe);
  }

  getRecipe(): Recipe{
    let ingredientsArray: Array<Ingredient> = [new Ingredient(this.ingredientGroup.controls.name.value, this.ingredientGroup.controls.amount.value, this.ingredientGroup.controls.unit.value)];
    let recipe: Recipe = new Recipe(RecipesComponent.DEFAULT_ID, this.recipeGroup.controls.title.value, this.recipeGroup.controls.text.value, this.recipeGroup.controls.duration.value, this.recipeGroup.controls.type.value, ingredientsArray );
    return recipe;
  }

  ngOnInit(): void {
  }
}
