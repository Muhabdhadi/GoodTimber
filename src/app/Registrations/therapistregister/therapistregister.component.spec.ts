import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapistregisterComponent } from './therapistregister.component';

describe('TherapistregisterComponent', () => {
  let component: TherapistregisterComponent;
  let fixture: ComponentFixture<TherapistregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TherapistregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapistregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
