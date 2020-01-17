import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';  // added
import { FormsModule } from '@angular/forms';  // added
import { UpdateTypeComponent } from './update-type.component';
import { RouterTestingModule } from '@angular/router/testing';  // added

describe('UpdateTypeComponent', () => {
  let component: UpdateTypeComponent;
  let fixture: ComponentFixture<UpdateTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTypeComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],  // added
      providers: [
        { provide: 'BASE_URL', useValue: document.getElementsByTagName('base')[0].href }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('1 == 1', () => {
    expect(1).toEqual(1);
    });



});
