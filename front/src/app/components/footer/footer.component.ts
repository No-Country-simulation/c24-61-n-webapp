import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouteService } from '../../core/services/route.service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  private routeService = inject(RouteService);
  
  isAuthRoute(): boolean {
    return this.routeService.shouldHideFooter();
  }
}
