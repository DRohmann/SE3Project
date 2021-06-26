import { Injectable } from '@angular/core';
import { BehaviorSubject, Observer } from 'rxjs';

import { initializeApp, getApps, getApp } from "firebase/app"
import { addDoc, collection, doc, DocumentData, getDocs, getFirestore, setDoc } from "firebase/firestore"
import { environment } from 'src/environments/environment'
import { Recipe } from 'src/app/models/recipe.model';
import { Ingredient } from 'src/app/models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private _recipesSubject = new BehaviorSubject<Recipe[]>([]);
  private _firebaseApp;
  private _db;
  private _recipes: Recipe[];

  public get recipes(): Recipe[] {
    return this._recipes;
  }

  public async saveExistingRecipe(recipe: Recipe): Promise<void> {
    const existingDoc = await setDoc(doc(this._db, "Recipes", recipe.id), this.mapModelToDoc(recipe));
  }

  public async saveNewRecipe(recipe: Recipe): Promise<void> {
    const newDoc = await addDoc(collection(this._db, "Recipes"), this.mapModelToDoc(recipe));
  }

  public async getCollection(): Promise<void> {
    const querySnapshot = await getDocs(collection(this._db, "Recipes"));
    querySnapshot.forEach((doc) => {
      this._recipes.push(this.mapDocToModel(doc));
    });
  }

  public mapDocToModel(documentData: DocumentData): Recipe {
    const data = documentData.data();
    return new Recipe(documentData.id, data.title, data.text, data.duration, data.type, this.mapDocToModel_Ingredients(data.ingredients));
  }

  public mapDocToModel_Ingredients(ingredients: []): Ingredient[] {
    JSON.stringify(ingredients);
    if (!ingredients)
      return [];

    var returnIngredients: Ingredient[] = [];
    ingredients.forEach(ingredient => {
      returnIngredients.push(new Ingredient(ingredient["name"], ingredient["amount"], ingredient["unit"]));
    });

    return returnIngredients;
  }

  public mapModelToDoc(recipe: Recipe): object {
    var ingredients: object[];
    ingredients = [];
    recipe.ingredients.forEach(ingredient => {
      ingredients.push(ingredient.toJSON());
    });

    return {
      title: recipe.title,
      text: recipe.text,
      duration: recipe.duration,
      type: recipe.type,
      ingredients: ingredients
    }
  }

  constructor() {
    if (!getApps().length) {
      this._firebaseApp = initializeApp(environment.firebase);
    } else {
      this._firebaseApp = getApp(); // if already initialized, use that one
    }
    this._db = getFirestore();
    this._recipes = [];
    this.getCollection();
  }
}