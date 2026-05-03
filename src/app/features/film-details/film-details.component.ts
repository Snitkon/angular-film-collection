import { Component, computed, inject, input } from '@angular/core';
import { FilmService } from '../../core/services/film.service';
// import { toSlug } from '../../shared/utils/url.util';

@Component({
  selector: 'app-film-details',
  imports: [],
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.scss',
})
export class FilmDetailsComponent {
  private filmService = inject(FilmService);
  public id = input.required<string>();

  public filmComputed = computed(() =>
    this.filmService.films().find((film) => film.id === Number(this.id())),
  );
}
