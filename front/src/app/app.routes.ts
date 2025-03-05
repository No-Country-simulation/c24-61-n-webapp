import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

export const routes: Routes = [
  // Ruta por defecto, redirecciona a la página de login
  { path: '', redirectTo: 'ingreso', pathMatch: 'full' },
  
  // Ruta para la página de login
  { path: 'ingreso', component: LoginComponent },
  
  // Ruta para la página de registro
  { path: 'registro', component: RegisterComponent },
  
  // Ruta para la página de inicio (home) con carga lazy
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
];
