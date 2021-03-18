import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverymenuComponent } from './deliverymenu.component';

describe('DeliverymenuComponent', () => {
  let component: DeliverymenuComponent;
  let fixture: ComponentFixture<DeliverymenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverymenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverymenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
