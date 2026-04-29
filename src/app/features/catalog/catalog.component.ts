import { Component, inject } from '@angular/core';
import { FilmService } from '../../core/services/film.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-catalog',
  imports: [JsonPipe],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
})
export class CatalogComponent {
  private filmService = inject(FilmService);
  public films = this.filmService.films;
}
