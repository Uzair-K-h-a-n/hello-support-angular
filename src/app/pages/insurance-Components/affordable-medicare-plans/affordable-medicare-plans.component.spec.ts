import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffordableMedicarePlansComponent } from './affordable-medicare-plans.component';

describe('AffordableMedicarePlansComponent', () => {
  let component: AffordableMedicarePlansComponent;
  let fixture: ComponentFixture<AffordableMedicarePlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffordableMedicarePlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffordableMedicarePlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
