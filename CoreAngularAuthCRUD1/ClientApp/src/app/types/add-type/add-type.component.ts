import { Component, OnInit } from '@angular/core';
import { AdvertTypesService } from '../_services/advert-types.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.css']
})
export class AddTypeComponent implements OnInit {
    private model: Model2 = { type: "", typeDescription: "" };
    public errorMsg;

    constructor(private advertTypesService: AdvertTypesService, private router: Router) { }

    ngOnInit() {
    }

    // not used - see onSubmit()
    addType() {
        this.advertTypesService.addAdvert(this.model).subscribe(result => {
            console.log(result);
            this.router.navigate(['/display-types']);
        }, errors => {
                //console.error(errors.status);
                if (errors.status === 400) {
                    this.errorMsg = errors.error.errors;
                } else {
                    this.errorMsg = "Server error";
                }                   
        });
    }

    onSubmit(typeForm) {
        console.log(typeForm);
        this.advertTypesService.addAdvert(this.model).subscribe(result => {
            console.log(result);
            this.router.navigate(['/display-types']);
        }, errors => {
            //console.error(errors.status);
            if (errors.status === 400) {
                this.errorMsg = errors.error.errors;
            } else {
                this.errorMsg = "Server error";
            }              
        });
    }

}

interface Model2 {
    //id: number;
    type: string;
    typeDescription: string;
}
