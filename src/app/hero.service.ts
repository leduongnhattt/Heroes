import { Injectable } from '@angular/core';
import { Hero } from './model/hero';
import { HEROES } from './mock-heros'
import { catchError, Observable, of, tap } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  private heroesUrl = 'api/heroes';
  getHeroes(): Observable<Hero[]> {

    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    )
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error : any) : Observable<T> => {
      console.error(error)
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
