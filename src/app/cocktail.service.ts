import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  private cocktailsUrl = '../assets/cocktails.json';

  constructor(private http: HttpClient) {}

  getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>(this.cocktailsUrl);
  }
}
