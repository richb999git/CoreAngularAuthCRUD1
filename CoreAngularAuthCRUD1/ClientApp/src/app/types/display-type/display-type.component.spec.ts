import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAdvertDetailsComponent } from './display-advert-details.component';

describe('DisplayAdvertDetailsComponent', () => {
  let component: DisplayAdvertDetailsComponent;
  let fixture: ComponentFixture<DisplayAdvertDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAdvertDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAdvertDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
