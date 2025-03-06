import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeroComponent } from '../../components/home/home-hero/home-hero.component';
import { HomeFeaturesComponent } from '../../components/home/home-features/home-features.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HomeHeroComponent, HomeFeaturesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor() {}
}
