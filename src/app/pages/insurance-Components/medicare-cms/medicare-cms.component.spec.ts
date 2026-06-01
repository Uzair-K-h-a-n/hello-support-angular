import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicareCmsComponent } from './medicare-cms.component';

describe('MedicareCmsComponent', () => {
  let component: MedicareCmsComponent;
  let fixture: ComponentFixture<MedicareCmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicareCmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicareCmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
