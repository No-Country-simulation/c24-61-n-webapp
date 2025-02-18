import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MegaMenuModule } from 'primeng/megamenu';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, MegaMenuModule, AvatarModule, ButtonModule, RippleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'personal-app';

  items: any[] = [
    {
      label: 'Company',
      root: true,
      items: [
        [
          {
            items: [
              { label: 'Features', icon: 'pi pi-list', subtext: 'Subtext of item' },
              { label: 'Customers', icon: 'pi pi-users', subtext: 'Subtext of item' },
              { label: 'Case Studies', icon: 'pi pi-file', subtext: 'Subtext of item' }
            ]
          }
        ],
        [
          {
            items: [
              { label: 'Solutions', icon: 'pi pi-shield', subtext: 'Subtext of item' },
              { label: 'Faq', icon: 'pi pi-question', subtext: 'Subtext of item' },
              { label: 'Library', icon: 'pi pi-search', subtext: 'Subtext of item' }
            ]
          }
        ]
      ]
    },
    {
      label: 'Resources',
      root: true
    },
    {
      label: 'Contact',
      root: true
    }
  ];
  
}
