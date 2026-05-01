import { Component, inject } from '@angular/core';
import { FilmService } from '../../core/services/film.service';
import { FilmCardComponent } from './components/film-card/film-card.component';
import { InputComponent } from './components/input/input.component';

@Component({
  selector: 'app-catalog',
  imports: [FilmCardComponent, InputComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
})
export class CatalogComponent {
  private filmService = inject(FilmService);
  public filmsData = this.filmService.films;
}
