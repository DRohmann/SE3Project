import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

import { RecipesComponent } from './recipes.component';
import { findReadVarNames } from '@angular/compiler/src/output/output_ast';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model'

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

  it("saveRecipe", () =>{
    const docIngredients: Array<Ingredient> = [new Ingredient(
      "name", "amount","unit"
    )];
    const docRecipe = new Recipe(
      "default","title","text","duration","type", docIngredients
    );
    
    
    component.ingredientGroup.controls.name.setValue("name");
    component.ingredientGroup.controls.amount.setValue(1);
    component.ingredientGroup.controls.unit.setValue("unit");

    component.recipeGroup.controls.duration.setValue("duration");
    component.recipeGroup.controls.text.setValue("text");
    component.recipeGroup.controls.title.setValue("title");
    component.recipeGroup.controls.type.setValue("type");
    
    
    const mockRecipe = component.getRecipe();
    expect(mockRecipe).toEqual(docRecipe);
  })

});
