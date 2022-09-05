import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterAttacksComponent } from './character-attacks.component';

describe('CharacterAttacksComponent', () => {
  let component: CharacterAttacksComponent;
  let fixture: ComponentFixture<CharacterAttacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterAttacksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterAttacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
