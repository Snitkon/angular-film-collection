import { Routes } from '@angular/router';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { LayoutComponent } from './features/layout/layout.component';
import { filmsResolver } from './core/resolvers/films.resolver';
import { breadcrumbResolver } from './core/resolvers/breadcrumb.resolver';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    resolve: { films: filmsResolver },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        data: { breadcrumb: 'Home' },

        children: [
          {
            path: '',
            loadComponent: () =>
              import('./features/catalog/catalog.component').then((c) => c.CatalogComponent),
          },
          {
            path: ':id',
            resolve: { breadcrumb: breadcrumbResolver },
            loadComponent: () =>
              import('./features/film-details/film-details.component').then(
                (c) => c.FilmDetailsComponent,
              ),
          },
        ],
      },
      {
        path: 'about',
        data: { breadcrumb: 'About' },
        loadComponent: () =>
          import('./features/about/about.component').then((c) => c.AboutComponent),
      },
    ],
  },
  {
    path: '**',
    title: '404',
    component: NotFoundComponent,
  },
];
