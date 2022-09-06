import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pf-character-builder';
  currentTab = 'Levels' // LEVELS / GEAR / SPELLS

  setTab(currentTab: string) {
    this.currentTab = currentTab;
  }
}
