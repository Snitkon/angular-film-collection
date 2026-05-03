import { inject, Injectable, signal } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

export interface Breadcrumb {
  label: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbsService {
  private router = inject(Router);
  private _breadcrumbs = signal<Breadcrumb[]>([]);
  public readonly breadcrumbs = this._breadcrumbs.asReadonly();

  public refresh(): void {
    const root = this.router.routerState.snapshot.root;
    this._breadcrumbs.set(this.buildBreadcrumbs(root));
  }

  private buildBreadcrumbs(
    route: ActivatedRouteSnapshot,
    url = '',
    breadcrumbs: Breadcrumb[] = [],
  ): Breadcrumb[] {
    const children = route.children;
    if (children.length === 0) return breadcrumbs;

    for (const child of children) {
      const routeURL = child.url.map((segment) => segment.path).join('/');
      let nextUrl = url;

      if (routeURL !== '') {
        nextUrl += `/${routeURL}`;
      }

      const label = child.data['breadcrumb'];
      if (label && nextUrl !== url) {
        breadcrumbs.push({ label, url: nextUrl });
      }

      return this.buildBreadcrumbs(child, nextUrl, breadcrumbs);
    }
    return breadcrumbs;
  }
}
