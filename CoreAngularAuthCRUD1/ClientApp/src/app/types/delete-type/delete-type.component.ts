import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AdvertTypesService } from '../_services/advert-types.service';
import { IAdvertType } from '../_services/advert-types.service';

@Component({
  selector: 'app-delete-type',
  templateUrl: './delete-type.component.html',
  styleUrls: ['./delete-type.component.css']
})
export class DeleteTypeComponent implements OnInit {
    private advertType: IAdvertType;
    private id3: string;
    private id4: string;

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private _route: ActivatedRoute, private advertTypesService: AdvertTypesService) {
    }

    ngOnInit() {
        // For a static snapshot of the route...
        var id = this._route.snapshot.paramMap.get("id"); // preferred way to get param
        var id2 = this._route.snapshot.params["id"]; // Old method to get param. Params has been deprecated

        // For subscribing to the observable paramMap...
        this._route.paramMap.subscribe((params: ParamMap) => {
            this.id3 = params.get('id');
        });

        this._route.params.subscribe(params2 => this.id4 = params2['id']); // Old method to get param. Params has been deprecated

        console.log(id);
        console.log(id2);
        console.log(this.id3);
        console.log(this.id4);

        //this.http.delete<AdvertType>(this.baseUrl + 'api/advertTypes/' + id).subscribe(result => {
        //    this.advertType = result;
        //}, error => console.error(error));

        this.advertTypesService.deleteType(+id).subscribe(result => {
            console.log(result);
        }, error => console.error(error));
        //const index = this.advertTypes.indexOf(advertType);
        //this.advertTypes.splice(index, 1);
    }

}
