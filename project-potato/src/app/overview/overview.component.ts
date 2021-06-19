import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes/recipes.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  service: RecipesService;

  constructor() {
    this.service = new RecipesService();
  }

  ngOnInit(): void {}
}
