import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { BreadcrumbsComponent } from '../../shared/components/breadcrumbs/breadcrumbs.component';
import { BreadcrumbsService } from '../../core/services/breadcrumbs.service';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, FooterComponent, HeaderComponent, BreadcrumbsComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  protected breadcrumbService = inject(BreadcrumbsService);
}
