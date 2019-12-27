import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
    private myDate: Date;
    private data: Date;
    modalRef: BsModalRef;

    constructor(private modalService: BsModalService) { }

    ngOnInit() {

    }

    clickedDate(d) {
        // this doesn't work properly but it will normally be in a form
        console.log(d);
        console.log(d.target);
        console.log("---" + d.target.value + "----");
        console.log(this.myDate);
    }

    onValueChange(value: Date): void {
        // this does work though
        this.data = value;
        console.log(this.data);
    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

    clickYes() {
        console.log("Yes");
        this.modalRef.hide();
    }

    clickNo() {
        console.log("No");
    }
}
