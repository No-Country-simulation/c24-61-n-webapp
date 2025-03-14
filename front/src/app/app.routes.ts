import { Routes } from '@angular/router';
import { SearchDetailComponent } from './pages/search-detail/search-detail.component';
import { CompanyProfilesComponent } from './pages/companies/company-profiles/company-profiles.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'empleos',
    loadComponent: () =>
      import('./pages/search-jobs/search-jobs.component').then(
        (m) => m.SearchJobsComponent
      ),
  },
  { path: 'empleo/:id', component: SearchDetailComponent },
  {
    path: 'empresas',
    loadComponent: () =>
      import('./pages/companies/company/companies.component').then(
        (m) => m.CompaniesComponent
      ),
  },
  { path: 'empresa/:id', component: CompanyProfilesComponent },
  {
    path: 'nosotros',
    loadComponent: () =>
      import('./pages/about/about-details.component').then(
        (m) => m.AboutDetailsComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'registro',
    loadComponent: () =>
      import('./auth/register/register.component').then(
        (m) => m.RegisterComponent
      ),
  },
  { path: '**', redirectTo: '' },
];
