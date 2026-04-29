import { Routes } from '@angular/router';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { LayoutComponent } from './features/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./routes/catalog.routes').then((r) => r.CATALOG_ROUTE),
      },
      {
        path: 'film/:id',
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
