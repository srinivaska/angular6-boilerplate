import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideolibComponent } from './videolib.component';

describe('VideolibComponent', () => {
  let component: VideolibComponent;
  let fixture: ComponentFixture<VideolibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideolibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideolibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
