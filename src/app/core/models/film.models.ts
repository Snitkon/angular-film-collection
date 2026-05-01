export interface IFilm {
  id: number;
  title: string;
  poster?: string;
  year: number;
  genre: string;
  rating: number;
  duration: number;
  description: string;
  posterUrl: string;
  isFavorite: boolean;
}
