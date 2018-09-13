import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class CharactersService {
    constructor(private http: Http) {}

    getCharacters(): Observable<any> {
        return this.http.get('assets/characters.json')
            .pipe(map((response: Response) => response.json()));
    }

    getCharacterData(url): Observable<Response> {
        return this.http.get(url);
    }
}
