import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  private router = inject(Router);

  isAuthRoute(): boolean {
    const currentUrl = this.router.url;
    return ['/login', '/registro'].includes(currentUrl);
  }

  isDashboardRoute(): boolean {
    const currentUrl = this.router.url;
    return currentUrl.startsWith('/dashboard');
  }

  shouldHideNavbar(): boolean {
    return this.isAuthRoute() || this.isDashboardRoute();
  }

  shouldHideFooter(): boolean {
    return this.isAuthRoute() || this.isDashboardRoute();
  }
}
