import { Component, inject } from '@angular/core';
import { BreadcrumbsService } from '../../../core/services/breadcrumbs.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss',
})
export class BreadcrumbsComponent {
  private breadcrumbsService = inject(BreadcrumbsService);

  public breadcrumbs = this.breadcrumbsService.breadcrumbs;
}
