import { Component, inject, input } from '@angular/core';
import { IFilm } from '../../../../core/models/film.models';
import { Router } from '@angular/router';
import { FilmService } from '../../../../core/services/film.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-film-card',
  imports: [NgClass],
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.scss',
})
export class FilmCardComponent {
  private router = inject(Router);
  private filmService = inject(FilmService);
  public filmInput = input.required<IFilm>();

  public openDetails() {
    const id = this.filmInput().id;
    this.router.navigate(['/home', id]);
  }

  onFavorite(event: Event): void {
    event.stopPropagation();
    this.filmService.onFavorite(this.filmInput().id);
  }
}
