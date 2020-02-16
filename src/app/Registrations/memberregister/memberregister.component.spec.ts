import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberregisterComponent } from './memberregister.component';

describe('MemberregisterComponent', () => {
  let component: MemberregisterComponent;
  let fixture: ComponentFixture<MemberregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
