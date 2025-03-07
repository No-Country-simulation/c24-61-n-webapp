import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'empleos', loadComponent: () => import('./pages/search-jobs/search-jobs.component').then(m => m.SearchJobsComponent) },
  { path: 'login', loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent) },
  { path: 'registro', loadComponent: () => import('./auth/register/register.component').then(m => m.RegisterComponent) },
  { path: '**', redirectTo: '' },
];
