import { Component } from '@angular/core';
import { HeroComponent } from '../../shared/home-hero/hero.component';

@Component({
  selector: 'app-company',
  imports: [HeroComponent],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent {

}
