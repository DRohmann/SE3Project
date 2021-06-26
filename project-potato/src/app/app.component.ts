import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-potato';

  constructor() {
    console.log("AppComponent Constructor");
  }

  ngOnInit(): void {
    console.log("AppComponent: ngInit");
  }
}
