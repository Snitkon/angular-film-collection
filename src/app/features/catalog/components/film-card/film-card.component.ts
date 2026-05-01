import { Component, inject, input } from '@angular/core';
import { IFilm } from '../../../../core/models/film.models';
import { Router } from '@angular/router';
import { toSlug } from '../../../../shared/utils/url.util';

@Component({
  selector: 'app-film-card',
  imports: [],
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.scss',
})
export class FilmCardComponent {
  private router = inject(Router);
  public filmInput = input.required<IFilm>();

  public openDetails() {
    const title = this.filmInput().title;
    this.router.navigate(['/home', toSlug(title)]);
  }
}
