import { Injectable, Inject, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EMPTY, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdvertTypesService {

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

    addAdvert(model: any) {
        return this.http.post(this.baseUrl + 'api/advertTypes', model);
    }

    deleteType(id: number) {
        return this.http.delete(this.baseUrl + 'api/advertTypes/' + id);
    }

    deleteType2(model: any) {
        return this.http.delete(this.baseUrl + 'api/advertTypes/' + model.id);
    }

    updateAdvert(id: number, model: any) {
        return this.http.put(this.baseUrl + 'api/advertTypes/' + id, model);
    }

    getType(id: number) {
        return this.http.get<IAdvertType>(this.baseUrl + 'api/advertTypes/' + id);
    }

    getTypes() {
        return this.http.get<IAdvertTypes[]>(this.baseUrl + 'api/advertTypes');
    }

    // I don't think you need to specify Observable because Angular 7 onwards returns Observable through RxJS by default
    addAdvert2(model: any): Observable<IAdvertType>{
        return this.http.post<IAdvertType>(this.baseUrl + 'api/advertTypes', model)
            .pipe(
                catchError(err => {
                    //if (err.status == 401) {
                        //this.router.navigateByUrl('/login');
                        //return EMPTY;
                    //} else {
                        console.log(err);
                        return EMPTY;
                        //return throwError(err);
                    //}
                })
            );
    }
    
}

export interface IAdvertType {
    id: number;
    type: string;
    typeDescription: string;
}

export interface IAdvertTypes {
    id: number;
    type: string;
    typeDescription: string;
}
