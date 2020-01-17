import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';  // added
import { DisplayTypeComponent } from './display-type.component';
import { RouterTestingModule } from '@angular/router/testing';  // added

describe('DisplayTypeComponent', () => {
  let component: DisplayTypeComponent;
  let fixture: ComponentFixture<DisplayTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayTypeComponent],
      imports: [HttpClientTestingModule, RouterTestingModule], // added
      providers: [
        { provide: 'BASE_URL', useValue: document.getElementsByTagName('base')[0].href }
      ]  // added, not sure this will work for actual mocking later though
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
