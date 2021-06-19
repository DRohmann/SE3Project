import { Component } from '@angular/core';
import { RecipesService } from './recipes/recipesService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-potato';

  constructor(private recipeModel: RecipesService) {
    console.log("AppComponent Constructor");
  }

  ngOnInit(): void {
    console.log("AppComponent: ngInit");
  }
}
