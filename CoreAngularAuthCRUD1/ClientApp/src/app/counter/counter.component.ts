import { Component, EventEmitter, Output, Input } from '@angular/core';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
    @Output() currentCountCopy = new EventEmitter;
    @Input() valuesFromDisplayTypes: any = "";
    public currentCount = 0;

    ngOnInit() {
        //this.valuesFromDisplayTypes = "";
        //console.log("--------in ngOnInit in counter component -------------");
        //console.log(this.valuesFromDisplayTypes);
    }

    public incrementCounter() {
        this.currentCount++;
        this.currentCountCopy.emit(this.currentCount);
    }
    public decrementCounter() {
        this.currentCount--;
        this.currentCountCopy.emit(this.currentCount);
    }
}
