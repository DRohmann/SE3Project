import { Injectable } from '@angular/core';
import { BehaviorSubject, Observer } from 'rxjs';

import { initializeApp, getApps, getApp } from "firebase/app"
import { collection, DocumentData, getDocs, getFirestore } from "firebase/firestore"
import { environment } from 'src/environments/environment'
import { Recipe } from './recipes.service' 

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
  
    constructor() {
      console.log("RecipesService Constructor")
      if (!getApps().length) {
        this._firebaseApp = initializeApp(environment.firebase);
      }else {
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
        this._recipes.push(this.map(doc));
      });
      console.log(this._recipes);
    }
  
    public map(documentData: DocumentData): Recipe {
      const data = documentData.data();
      return new Recipe(documentData.id, data.title, data.text, data.duration, data.type, data.ingredients)
    }
  }