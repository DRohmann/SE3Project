import { Injectable } from '@angular/core';
import { BehaviorSubject, Observer } from 'rxjs';

import { initializeApp, getApps, getApp } from "firebase/app"
import { addDoc, collection, doc, DocumentData, getDocs, getFirestore, setDoc } from "firebase/firestore"
import { environment } from 'src/environments/environment'
import { Recipe } from '../models/recipe.model'

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

  public async saveExistingRecipe(recipe: Recipe) {
    const existingDoc = await setDoc(doc(this._db, "Recipes", recipe.id), this.mapModelToDoc(recipe));
  }

  public async saveNewRecipe(recipe: Recipe) {
    const newDoc = await addDoc(collection(this._db, "Recipes"), this.mapModelToDoc(recipe));
  }

  public mapDocToModel(documentData: DocumentData): Recipe {
    const data = documentData.data();
    return new Recipe(documentData.id, data.title, data.text, data.duration, data.type, data.ingredients)
  }

  public mapModelToDoc(recipe: Recipe): object {
    return {
      title: recipe.title,
      text: recipe.text,
      duration: recipe.duration,
      type: recipe.type,
    }
  }

  constructor() {
    console.log("RecipesService Constructor")
    if (!getApps().length) {
      this._firebaseApp = initializeApp(environment.firebase);
    } else {
      this._firebaseApp = getApp(); // if already initialized, use that one
    }
    this._db = getFirestore();
    this._recipes = [];
    this.getCollection();
  }

  public async getCollection() {
    console.log("RecipeService getCollection");
    const querySnapshot = await getDocs(collection(this._db, "Rezepte"));
    querySnapshot.forEach((doc) => {
      this._recipes.push(this.mapDocToModel(doc));
    });
    console.log(this._recipes);
  }
}