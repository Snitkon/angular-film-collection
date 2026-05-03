import { ResolveFn } from '@angular/router';
import { FilmService } from '../services/film.service';
import { inject } from '@angular/core';

export const breadcrumbResolver: ResolveFn<string> = (route) => {
  const filmService = inject(FilmService);
  const id = route.paramMap.get('id');

  const film = filmService.getFilmById(id);
  return film ? film.title : 'Move';
};
