import { Component, OnInit, Inject, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdvertTypesService } from '../_services/advert-types.service';
import { Router } from '@angular/router';
import { IAdvertType, IAdvertTypes } from '../_services/advert-types.service';

@Component({
  selector: 'app-display-types',
  templateUrl: './display-types.component.html',
  styleUrls: ['./display-types.component.css']
})
export class DisplayTypesComponent implements OnInit {
    public advertTypes: IAdvertTypes[];
    public advertType: IAdvertType;
    private count: number = 0;

    constructor(private advertTypesService: AdvertTypesService, private router: Router) {}

    ngOnInit() {
        this.advertTypesService.getTypes().subscribe(result => {
            this.advertTypes = result;
            console.log(this.advertTypes);
        }, error => console.error(error));
    }

    deleteType(advertType: IAdvertType) {
        this.advertTypesService.deleteType(advertType.id).subscribe(result => {
            console.log(result);
        }, error => console.error(error));
        const index = this.advertTypes.indexOf(advertType);
        this.advertTypes.splice(index, 1);
    }

    editType(id) {
        this.router.navigate(['/update-type/' + id]);  
    }

    typeToUpperCase(advertType: IAdvertType) {
        const index = this.advertTypes.indexOf(advertType);
        var model: IAdvertType = {...advertType }; //copy - not a reference
        model.typeDescription = this.advertTypes[index].typeDescription.toUpperCase();
        this.advertTypesService.updateAdvert(advertType.id, model).subscribe(result => {
            console.log(result);
            this.advertTypes[index].typeDescription = this.advertTypes[index].typeDescription.toUpperCase();
        }, error => {
            console.error(error);
        });
    }

    typeToLowerCase(advertType: IAdvertType) {
        const index = this.advertTypes.indexOf(advertType);
        var model = Object.assign({}, advertType); //copy - not a reference
        model.typeDescription = this.advertTypes[index].typeDescription.toLowerCase();
        this.advertTypesService.updateAdvert(advertType.id, model).subscribe(result => {
            console.log(result);
            this.advertTypes[index].typeDescription = this.advertTypes[index].typeDescription.toLowerCase();
        }, error => {
            console.error(error);
        });
    }

    passCurrentCount(count: number) {
        this.count = count;
    }

}
