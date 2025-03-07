import { Routes } from '@angular/router';
import { SearchDetailComponent } from './pages/search-detail/search-detail.component';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'empleos', loadComponent: () => import('./pages/search-jobs/search-jobs.component').then(m => m.SearchJobsComponent) },
  { path: 'empleo/:id', component: SearchDetailComponent },
  { path: 'login', loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent) },
  { path: 'registro', loadComponent: () => import('./auth/register/register.component').then(m => m.RegisterComponent) },
  { path: '**', redirectTo: '' },
];
