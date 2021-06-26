import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

import { RecipesComponent } from './recipes.component';
import { findReadVarNames } from '@angular/compiler/src/output/output_ast';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';

// import { rootCertificates } from 'tls';

describe('RecipesComponent', () => {
  let component: RecipesComponent;
  let fixture: ComponentFixture<RecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipesComponent],
      imports: [ReactiveFormsModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("test string", () => {
    const title = fixture.debugElement.nativeElement.querySelector('#title');
    expect(title.innerHTML).toBe('Recipes');
  });

  it("check Button Ingredients", () => {
    const button = fixture.debugElement.nativeElement.querySelector('#newIngredient');
    expect(button.innerHTML).toContain('Neue Zutat hinzufügen');
  })

  it("ckeck Button Recipe", () => {
    const button = fixture.debugElement.nativeElement.querySelector('#newRecipe');
    expect(button.innerHTML).toContain('Rezept speichern');
  })

  it("saveRecipe", () => {
    const docIngredients: Array<Ingredient> = [new Ingredient(
      "name", "amount", "unit"
    )];
    const docRecipe = new Recipe(
      "", "duration", "text", "title", "type", docIngredients
    );


    component.ingredientGroup.controls.Name.setValue("name");
    component.ingredientGroup.controls.amount.setValue("amount");
    component.ingredientGroup.controls.unit.setValue("unit");

    component.recipeGroup.controls.duration.value.setValue("duration");
    component.recipeGroup.controls.text.value.setValue("text");
    component.recipeGroup.controls.title.value.setValue("title");
    component.recipeGroup.controls.type.value.setValue("type");
    component.recipeGroup.controls.ingredients.value.setValue(component.ingredientGroup.value);

    const mockRecipe = component.saveRecipe();
    expect(mockRecipe).toEqual(docRecipe);
  })

});
