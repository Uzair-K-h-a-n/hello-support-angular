import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtSettlementSolutionPublicComponent } from './debt-settlementsolution-public.component';

describe('AutoInsuranceComponent', () => {
  let component: DebtSettlementSolutionPublicComponent;
  let fixture: ComponentFixture<DebtSettlementSolutionPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtSettlementSolutionPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtSettlementSolutionPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
