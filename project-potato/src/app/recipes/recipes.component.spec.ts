import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

import { RecipesComponent } from './recipes.component';
import { findReadVarNames } from '@angular/compiler/src/output/output_ast';

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

  it("table existence", () => {
    const src = component.recipeGroup;
    expect(src).toBeDefined();
  });
});
