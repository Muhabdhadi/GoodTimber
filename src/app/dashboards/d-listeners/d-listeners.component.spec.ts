import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DListenersComponent } from './d-listeners.component';

describe('DListenersComponent', () => {
  let component: DListenersComponent;
  let fixture: ComponentFixture<DListenersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DListenersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DListenersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
