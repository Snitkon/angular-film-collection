import { Injectable, signal } from '@angular/core';
import { IFilm } from '../models/film.models';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private _films = signal<IFilm[]>([]);
  readonly films = this._films.asReadonly();

  setFilms(data: IFilm[]) {
    this._films.set(data);
  }
}
