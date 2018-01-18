import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { PhotoComponent } from '../photo/photo.component';
import { Headers } from '@angular/http/src/headers';

export class PhotoService {

    url = 'http://localhost:3000/v1/fotos';
    headerObj = new Headers();

    constructor(private _http: Http) {
        this.headerObj.append('Content-Type', 'application/json');
    }

    create(): Observable<any> {
        return this._http.get(this.url).map(res => res.json());
    }

    read(item: PhotoComponent): Observable<Response> {
        return this._http.post(this.url, JSON.stringify(item), {headers: this.headerObj});
    }

    readById() {

    }
    update() {
    }

    delete() {

    }
}
