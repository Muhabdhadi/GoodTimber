import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapistLoginComponent } from './therapist-login.component';

describe('TherapistLoginComponent', () => {
  let component: TherapistLoginComponent;
  let fixture: ComponentFixture<TherapistLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TherapistLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapistLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
