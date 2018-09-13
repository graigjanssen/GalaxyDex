import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class DetailService {
    constructor(private http: Http) {}
    
    getFilm(url): Observable<Response> {
        return this.http.get(url);
    }
}