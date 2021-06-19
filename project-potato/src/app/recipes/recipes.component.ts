import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';

// export interface Recipe {
//   name: string;
//   preparation: string;
//   weight: Ingredient[];
// }
// export interface Ingredient{

// }
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})



export class RecipesComponent implements OnInit {

  recipeGroup: FormGroup;
  columns: string[];

  constructor(private formBuilder: FormBuilder) {
    this.columns = ["Name", "Typ", "Dauer"];
    this.recipeGroup = this.formBuilder.group({
      tableRowArray: this.formBuilder.array([
        this.createTableRow()
      ])
    })
  }

  getRecipes():  FormArray {
    return this.recipeGroup.get('tableRowArray') as FormArray;
  }

  createTableRow(): FormGroup {
    return this.formBuilder.group({
      name: new FormControl(null,{}),
      type: new FormControl(null,{}),
      duration: new FormControl(null,{}),
    })
  }

  ngOnInit(): void {
    
  }
}
