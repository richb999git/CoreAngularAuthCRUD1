import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // added
import { AddTypeComponent } from './add-type.component';
import { RouterTestingModule } from '@angular/router/testing';  // added
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';  // added


describe('AddTypeComponent', () => {
  let component: AddTypeComponent;
  let fixture: ComponentFixture<AddTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddTypeComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],  // added
      providers: [
        { provide: 'BASE_URL', useValue: document.getElementsByTagName('base')[0].href }
      ]  // added, not sure this will work for actual mocking later though
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add 1 to the input value HHH', () => {
    const result = component.dummyInc(2);
    expect(result).toBe(3);
  });

  it('should double the dummyH variable', () => {
    component.dummyH = 3;
    component.dummyDouble();
    expect(component.dummyH).toBe(6);
  });

});
