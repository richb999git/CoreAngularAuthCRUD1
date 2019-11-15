import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-boats',
  templateUrl: './boats.component.html',
  styleUrls: ['./boats.component.css']
})
export class BoatsComponent implements OnInit {
    @Input() valuesFromDisplayTypes: any = "";
    @Input() count: any = "";

    constructor() { }

    ngOnInit() {
    }


}
