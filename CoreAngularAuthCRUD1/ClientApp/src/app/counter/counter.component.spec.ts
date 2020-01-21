import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestPipePipe } from '../../../src/pipes/test-pipe.pipe'; // added
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent, TestPipePipe] // added TestPipePipe
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display a title', async(() => {
    const titleText = fixture.nativeElement.querySelector('h1').textContent;
    expect(titleText).toEqual('Counter');
  }));

  it('should start with count 0, then increments by 2 when inc button clicked twice, then decrement by 1 when decrement button clicked', async(() => {
    const countElement = fixture.nativeElement.querySelector('strong');
    expect(countElement.textContent).toEqual('0');

    const incrementButton = fixture.nativeElement.querySelector('#inc');
    incrementButton.click();
    fixture.detectChanges();
    expect(countElement.textContent).toEqual('1');

    incrementButton.click();
    fixture.detectChanges();
    expect(countElement.textContent).toEqual('2');

    const decrementButton = fixture.nativeElement.querySelector('#dec');
    decrementButton.click();
    fixture.detectChanges();
    expect(countElement.textContent).toEqual('1');

  }));



});
