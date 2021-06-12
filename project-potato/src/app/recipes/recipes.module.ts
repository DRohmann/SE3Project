import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RecipesComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [RecipesComponent],
})
export class RecipesModule {}
