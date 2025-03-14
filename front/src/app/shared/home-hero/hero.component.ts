import { CommonModule } from '@angular/common';
import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports:[RouterLink, CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  @Input() titulo: string = '';
  @Input() detalle: string = '';
  @Input() btn1: string = '';
  @Input() btn2: string = '';
  @Input() btn1Link: string = '';
  @Input() btn2Link: string = '';
  @Input() imgSrc: string = '';

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    setTimeout(() => {
      this.cdRef.detectChanges(); 
    });
  }
}
