import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';  // added
import { DisplayTypesComponent } from './display-types.component';
import { BoatsComponent } from '../../boats/boats.component';  // added
import { CounterComponent } from '../../counter/counter.component';  // added
import { TestPipePipe } from '../../../../src/pipes/test-pipe.pipe'; // added
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';  // added

describe('DisplayTypesComponent', () => {
  let component: DisplayTypesComponent;
  let fixture: ComponentFixture<DisplayTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule], // added
      declarations: [DisplayTypesComponent, BoatsComponent, CounterComponent, TestPipePipe], // added BoatsComponent & CounterComponent & TestPipePipe
      providers: [
        { provide: 'BASE_URL', useValue: document.getElementsByTagName('base')[0].href }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
