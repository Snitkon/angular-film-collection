import { Component, inject, input } from '@angular/core';
import { IFilm } from '../../../../core/models/film.models';
import { Router } from '@angular/router';

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
    const id = this.filmInput().id;
    this.router.navigate(['/home', id]);
  }
}
