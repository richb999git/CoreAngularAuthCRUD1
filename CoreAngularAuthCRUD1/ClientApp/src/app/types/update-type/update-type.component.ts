import { Component, OnInit, Input } from '@angular/core';
import { AdvertTypesService } from '../_services/advert-types.service';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-update-type',
  templateUrl: './update-type.component.html',
  styleUrls: ['./update-type.component.css']
})
export class UpdateTypeComponent implements OnInit {
    private model: IAdvertType = { id: 0, type: "", typeDescription: "" }; // initialise or you get undefined model error
    private id: number;

    constructor(private advertTypesService: AdvertTypesService, private router: Router, private _route: ActivatedRoute) {}

    ngOnInit() {
        // For subscribing to the observable paramMap...
        this._route.paramMap.subscribe((params: ParamMap) => {
            this.id = parseInt(params.get('id'));
            this.advertTypesService.getType(this.id).subscribe(result => {
                this.model = result;
            }, error => console.error(error));
        });
    }

    updateType() {
        this.model.id = this.id;
        console.log(this.model.id);
        this.advertTypesService.updateAdvert(this.id, this.model).subscribe(result => {
            this.router.navigate(['/display-types']);
        }, error => console.error(error));
    }

}

interface IAdvertType {
    id: number;
    type: string;
    typeDescription: string;
}
