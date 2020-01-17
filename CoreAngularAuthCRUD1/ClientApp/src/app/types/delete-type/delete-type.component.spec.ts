import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';  // added
import { DeleteTypeComponent } from './delete-type.component';
import { Inject, InjectionToken } from '@angular/core'; // added
import { RouterTestingModule } from '@angular/router/testing';  // added



describe('DeleteTypeComponent', () => {
  let component: DeleteTypeComponent;
  let fixture: ComponentFixture<DeleteTypeComponent>;



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteTypeComponent],
      imports: [HttpClientTestingModule, RouterTestingModule], // added
      providers: [
              { provide: 'BASE_URL', useValue: document.getElementsByTagName('base')[0].href }
            ]  // added, not sure this will work for actual mocking later though
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
