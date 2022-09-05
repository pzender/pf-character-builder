import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterLevelsComponent } from './character-levels.component';

describe('CharacterLevelsComponent', () => {
  let component: CharacterLevelsComponent;
  let fixture: ComponentFixture<CharacterLevelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterLevelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
