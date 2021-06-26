// import * as internal from "stream";

import { randomBytes } from "crypto";

export class Recipe {
  id: string;
  title: string;
  text: string;
  duration: string;
  type: string;
  ingredients: Ingredients[];

  constructor( id:string, title: string, text: string, duration: string, type: string, ingredients: Ingredients[]) {
    this.id = id;
    this.title = title;
    this.text = text;
    this.duration = duration;
    this.type = type;
    this.ingredients = ingredients;
  }
}

export class Ingredients {
  name: string;
  amount: number;
  unit: string;

  constructor(name: string, amount: number, unit: string){
    this.name = name;
    this.amount = amount;
    this.unit = unit;
  }
}
