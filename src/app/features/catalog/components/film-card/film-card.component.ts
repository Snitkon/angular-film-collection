import { Component, input } from '@angular/core';
import { IFilm } from '../../../../core/models/film.models';

@Component({
  selector: 'app-film-card',
  imports: [],
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.scss',
})
export class FilmCardComponent {
  public filmInput = input.required<IFilm>();
}
