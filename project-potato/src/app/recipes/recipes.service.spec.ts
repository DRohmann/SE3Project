import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DocumentData, QuerySnapshot } from "firebase/firestore"
import { never } from 'rxjs';

import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';
import { RecipesService } from './recipes.service';

describe('RecipesService', () => {
  let service: RecipesService;
  let fixture: ComponentFixture<RecipesService>;

  const modelIngredients: Array<Ingredient> = [new Ingredient("name1", "amount1", "unit1"), new Ingredient("name2", "amount2", "unit2")];
  const modelRecipe = new Recipe("id", "title", "text", "duration", "type", modelIngredients);

  const docIngredients = [
    {
      name: "name1",
      amount: "amount1",
      unit: "unit1"
    },
    {
      name: "name2",
      amount: "amount2",
      unit: "unit2"
    }
  ]

  const docRecipe = {
    duration: "duration",
    text: "text",
    title: "title",
    type: "type",
    ingredients: docIngredients,
  }

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(RecipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should establish a database connection', async () => {
    await service.getCollection();
    expect(service.recipes.length).toBeGreaterThan(0);
  });

  it('should map the Firebase-Item correctly', () => {
    const documentDataSpy = jasmine.createSpyObj("DocumentData", ["id", "data"]);

    const idMock = "A1";

    documentDataSpy.id.and.returnValue(idMock);
    documentDataSpy.data.and.returnValue(docRecipe);
    const testRecipe = service.mapDocToModel(documentDataSpy);

    expect(testRecipe.title).toEqual(modelRecipe.title);
    expect(testRecipe.text).toEqual(modelRecipe.text);
    expect(testRecipe.duration).toEqual(modelRecipe.duration);
    expect(testRecipe.type).toEqual(modelRecipe.type);
  });

  it('should map the Recipe-Item correctly', () => {
    const testRecipe = service.mapModelToDoc(modelRecipe)

    expect(testRecipe).toEqual(docRecipe);
  });
});
