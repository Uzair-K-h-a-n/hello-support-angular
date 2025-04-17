import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtSettlementSolutionComponent } from './debt-settlementsolution.component';

describe('AutoInsuranceComponent', () => {
  let component: DebtSettlementSolutionComponent;
  let fixture: ComponentFixture<DebtSettlementSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtSettlementSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtSettlementSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
