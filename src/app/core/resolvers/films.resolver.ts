import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { FilmService } from '../services/film.service';
import MOCK_FILMS from '../mock/films.mock.json';

export const filmsResolver: ResolveFn<boolean> = () => {
  const filmsService = inject(FilmService);

  filmsService.setFilms(MOCK_FILMS);

  return true;
};
