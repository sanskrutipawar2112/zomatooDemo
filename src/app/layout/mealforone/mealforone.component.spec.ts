import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealforoneComponent } from './mealforone.component';

describe('MealforoneComponent', () => {
  let component: MealforoneComponent;
  let fixture: ComponentFixture<MealforoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealforoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealforoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
