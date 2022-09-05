import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-summary',
  templateUrl: './character-summary.component.html',
  styleUrls: ['./character-summary.component.scss']
})
export class CharacterSummaryComponent implements OnInit {

  constructor() { }
  stats: string[] = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA']

  ngOnInit(): void {
  }

}
