import { Ingredient } from "./ingredient.model";

export class Recipe {
  id: string;
  title: string;
  text: string;
  duration: string;
  type: string;
  ingredients: Ingredient[];


  constructor(id: string, title: string, text: string, duration: string, type: string, ingredients: Ingredient[]) {

    this.id = id;
    this.title = title;
    this.text = text;
    this.duration = duration;
    this.type = type;
    this.ingredients = ingredients;
  }
}