import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DTherapistsComponent } from './d-therapists.component';

describe('DTherapistsComponent', () => {
  let component: DTherapistsComponent;
  let fixture: ComponentFixture<DTherapistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DTherapistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DTherapistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
