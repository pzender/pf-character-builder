import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pf-character-builder';
  view = 'LEVELS' // LEVELS / GEAR / SPELLS

  setDetailedView(view: string) {
    this.view = view;
  }
}
