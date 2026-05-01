import { Routes } from '@angular/router';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { LayoutComponent } from './features/layout/layout.component';
import { filmsResolver } from './core/resolvers/films.resolver';

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
        loadChildren: () => import('./routes/catalog.routes').then((r) => r.CATALOG_ROUTE),
      },
      {
        path: 'home/:title',
        loadChildren: () => import('./routes/details.routes').then((r) => r.FILM_DETAILS_ROUTE),
      },
      {
        path: 'about',
        loadChildren: () => import('./routes/about.routes').then((r) => r.ABOUT_ROUTE),
      },
    ],
  },
  {
    path: '**',
    title: '404',
    component: NotFoundComponent,
  },
];
