import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class CharactersService {
    constructor(private http: HttpClient) {}

    getCharacters(): Observable<any> {
        return this.http.get('assets/characters.json');
    }

    getCharacterData(url): Observable<any> {
        return this.http.get(url)
            .pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        console.error(error);
        return Observable.throw(error || 'Server error');
    }
}
