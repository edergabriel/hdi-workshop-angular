import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/internal/operators';


@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor(private http: HttpClient) { }

  getPeopleStarWars(): Observable<any> {
    return this.http.get('https://swapi.co/api/people/')
      .pipe(
        map(response => {
          return response;
        }),
        catchError((err, caught) => {
          return throwError(new Error('Erro API: ' + 'https://swapi.co/api/people/'));
        })
      );
  }
}
