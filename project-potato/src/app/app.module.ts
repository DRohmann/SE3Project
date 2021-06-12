import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OverviewModule } from './overview/overview.module';
import { RecipesModule } from './recipes/recipes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, OverviewModule, RecipesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
