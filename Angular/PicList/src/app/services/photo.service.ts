import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { PhotoComponent } from '../photo/photo.component';
import { Headers } from '@angular/http';

@Injectable()
export class PhotoService {

    url = 'http://localhost:3000/v1/fotos';
    headerObj = new Headers();

    constructor(private _http: Http) {
    }

    read(): Observable<any> {
        return this._http.get(this.url).map(res => res.json());
    }

    creat(item: PhotoComponent): Observable<Response> {
        this.headerObj.append('Content-Type', 'application/json');
        return this._http.post(this.url, JSON.stringify(item), {headers: this.headerObj});
    }

    readById() {

    }
    update() {
    }

    delete() {

    }
}
