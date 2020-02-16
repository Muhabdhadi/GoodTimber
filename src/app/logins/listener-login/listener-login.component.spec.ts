import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenerLoginComponent } from './listener-login.component';

describe('ListenerLoginComponent', () => {
  let component: ListenerLoginComponent;
  let fixture: ComponentFixture<ListenerLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListenerLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
