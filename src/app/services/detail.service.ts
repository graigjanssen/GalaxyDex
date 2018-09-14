import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class DetailService {
    constructor(private http: HttpClient) {}
    
    getFilms(urls: string[]): Observable<any> {
        const responses = [];
        urls.forEach(url => {
            const response = this.http.get(url)
                .pipe(catchError(this.handleError));

            responses.push(response);
        });

        return forkJoin(responses);
    }

    private handleError(error: HttpErrorResponse) {
        console.error(error);
        return Observable.throw(error || 'Server error');
    }
}