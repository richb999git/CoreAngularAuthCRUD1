import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAdvertsComponent } from './display-adverts.component';

describe('DisplayAdvertsComponent', () => {
  let component: DisplayAdvertsComponent;
  let fixture: ComponentFixture<DisplayAdvertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAdvertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAdvertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
