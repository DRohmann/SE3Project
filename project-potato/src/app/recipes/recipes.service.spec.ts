import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DocumentData, QuerySnapshot } from "firebase/firestore"
import { never } from 'rxjs';

import { Recipe, Ingredients } from './recipes.service';
import { RecipesService } from './recipesService.service';

describe('RecipesService', () => {
  let service: RecipesService;
  let fixture: ComponentFixture<RecipesService>;

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
    const dataMockIngredients = {
      name: "name", 
      amount: 1,
      unit: "unit"
    }
    const dataMock = {
      duration: "duration",
      text: "text",
      title: "title",
      type: "type",
      ingredients: dataMockIngredients,
    }
    

    documentDataSpy.id.and.returnValue(idMock);
    documentDataSpy.data.and.returnValue(dataMock);
    const testRecipe = service.map(documentDataSpy);

    var ingredientsArray: Array<Ingredients> = [new Ingredients("name", 1, "unit")];
    const goalRecipe = new Recipe("id", "title", "text", "duration", "type", ingredientsArray);
    // expect(testRecipe).toEqual(goalRecipe);
    expect(testRecipe.title).toEqual(goalRecipe.title);
    expect(testRecipe.text).toEqual(goalRecipe.text);
    expect(testRecipe.duration).toEqual(goalRecipe.duration);
    expect(testRecipe.type).toEqual(goalRecipe.type);
  });
});
