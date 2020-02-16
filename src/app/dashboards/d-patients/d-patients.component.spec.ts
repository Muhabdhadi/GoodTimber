import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DPatientsComponent } from './d-patients.component';

describe('DPatientsComponent', () => {
  let component: DPatientsComponent;
  let fixture: ComponentFixture<DPatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DPatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
