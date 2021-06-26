import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { Recipe, Ingredients } from '../models/recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})



export class RecipesComponent implements OnInit {
  service: RecipesService;
  public DEFAULT_ID:string = "default"; //id set in firebase

  recipeGroup: FormGroup;
  ingredientGroup: FormGroup;
  ingredients: boolean;

  
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
    this.ingredients = false;
  }

  public addNewIngredient(){
    this.ingredients = true;
  }

  public saveRecipe(){
    var ingredientsArray: Array<Ingredients> = [new Ingredients(this.ingredientGroup.controls.name.value, this.ingredientGroup.controls.amount.value, this.ingredientGroup.controls.unit.value)];
    var recipe = new Recipe(this.DEFAULT_ID, this.recipeGroup.controls.title.value, this.recipeGroup.controls.text.value, this.recipeGroup.controls.duration.value, this.recipeGroup.controls.type.value, ingredientsArray );
    this.service.saveNewRecipe(recipe);
    return recipe; 
  }

  ngOnInit(): void { 
  }
}
