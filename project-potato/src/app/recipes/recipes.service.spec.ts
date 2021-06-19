import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DocumentData, QuerySnapshot } from "firebase/firestore"
import { never } from 'rxjs';

import { Recipe, RecipesService } from './recipes.service';

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
    const dataMock = {
      duration: "duration",
      text: "text",
      title: "title",
      type: "type"
    }

    documentDataSpy.id.and.returnValue("id");
    console.log(documentDataSpy.id);
    documentDataSpy.data.and.returnValue(dataMock);
    console.log(documentDataSpy.data);
    const testRecipe = service.map(documentDataSpy);

    const goalRecipe = new Recipe("id", "title", "text", "duration", "type");
    console.log("test");
    console.log(testRecipe);
    console.log("goal");
    console.log(goalRecipe);
    expect(testRecipe).toEqual(goalRecipe);
  });
});
