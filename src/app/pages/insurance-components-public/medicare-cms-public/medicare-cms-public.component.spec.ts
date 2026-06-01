import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicareCmsPublicComponent } from './medicare-cms-public.component';

describe('MedicareCmsPublicComponent', () => {
  let component: MedicareCmsPublicComponent;
  let fixture: ComponentFixture<MedicareCmsPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicareCmsPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicareCmsPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
