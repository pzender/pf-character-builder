import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterGearComponent } from './character-gear.component';

describe('CharacterGearComponent', () => {
  let component: CharacterGearComponent;
  let fixture: ComponentFixture<CharacterGearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterGearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
