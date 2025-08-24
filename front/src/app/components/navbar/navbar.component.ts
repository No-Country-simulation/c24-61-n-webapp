import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteService } from '../../core/services/route.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private routeService = inject(RouteService);
  
  isAuthRoute(): boolean {
    return this.routeService.shouldHideNavbar();
  }
}
