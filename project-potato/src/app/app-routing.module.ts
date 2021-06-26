import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'Übersicht', component: OverviewComponent },
  { path: 'Rezepte', component: RecipesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
