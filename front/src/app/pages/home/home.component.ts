import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeFeaturesComponent } from '../../components/home/home-features/home-features.component';
import { HeroComponent } from '../../shared/home-hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, HomeFeaturesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor() {}
}
