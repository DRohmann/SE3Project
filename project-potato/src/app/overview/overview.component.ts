import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes/recipes.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  private service: RecipesService;

  public get recipes() {
    return this.service.recipes;
  }

  constructor() {
    this.service = new RecipesService();
  }

  ngOnInit(): void {}
}
