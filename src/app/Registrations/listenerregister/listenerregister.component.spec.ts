import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenerregisterComponent } from './listenerregister.component';

describe('ListenerregisterComponent', () => {
  let component: ListenerregisterComponent;
  let fixture: ComponentFixture<ListenerregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListenerregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenerregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
