import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DetailService {
    constructor(private http: Http) {}
    
    getFilms(urls: string[]): Observable<any> {
        const responses = [];
        urls.forEach(url => {
            const response = this.http.get(url)
                .pipe(map(res => JSON.parse(res['_body'])));
            responses.push(response);
        });

        return forkJoin(responses);
    }
}