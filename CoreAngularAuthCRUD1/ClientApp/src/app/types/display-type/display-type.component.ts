import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IAdvertType } from '../_services/advert-types.service';

@Component({
  selector: 'app-display-type',
  templateUrl: './display-type.component.html',
  styleUrls: ['./display-type.component.css']
})
export class DisplayTypeComponent implements OnInit {
    public advertType: IAdvertType;
    public id3: string;
    public id4: string;
    public id5: string;

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private _route: ActivatedRoute) {
        // For a static snapshot of the route...
        var id = _route.snapshot.paramMap.get("id"); // preferred way to get param
        var id2 = _route.snapshot.params["id"]; // Old method to get param. Params has been deprecated

        // For subscribing to the observable paramMap...
        _route.paramMap.subscribe((params: ParamMap) => {
            this.id3 = params.get('id');
        });        

        _route.params.subscribe(params2 => this.id4 = params2['id']); // Old method to get param. Params has been deprecated

        console.log(baseUrl);
        console.log(id);
        console.log(id2);
        console.log(this.id3);
        console.log(this.id4);

        http.get<IAdvertType>(baseUrl + 'api/advertTypes/' + id).subscribe(result => {
            this.advertType = result;
        }, error => console.error(error));
  }

  ngOnInit() {
  }

  deleteType(id) {
      console.log(this.baseUrl);
      alert("deleteType, id= " + id + " url= " + this.baseUrl + 'api/advertTypes/' + id + "http= " + this.http);
      this.http.delete<IAdvertType>(this.baseUrl + 'api/advertTypes/' + id).subscribe(result => {
          this.advertType = result;
      }, error => console.error(error)); 
  }

}
