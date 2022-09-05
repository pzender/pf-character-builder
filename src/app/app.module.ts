import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterSummaryComponent } from './components/character-summary/character-summary.component';
import { CharacterAttacksComponent } from './components/character-attacks/character-attacks.component';
import { CharacterLevelsComponent } from './components/character-levels/character-levels.component';
import { LevelComponent } from './components/level/level.component';
import { CharacterGearComponent } from './components/character-gear/character-gear.component';
import { CharacterSpellsComponent } from './components/character-spells/character-spells.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterSummaryComponent,
    CharacterAttacksComponent,
    CharacterLevelsComponent,
    LevelComponent,
    CharacterGearComponent,
    CharacterSpellsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
