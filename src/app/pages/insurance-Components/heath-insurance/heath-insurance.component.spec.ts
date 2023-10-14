import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeathInsuranceComponent } from './heath-insurance.component';

describe('HeathInsuranceComponent', () => {
  let component: HeathInsuranceComponent;
  let fixture: ComponentFixture<HeathInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeathInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeathInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
