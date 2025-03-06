import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import {Toast } from 'primeng/toast';
import { AuthService } from '../services/auth.services';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, ButtonModule, Toast],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [MessageService]
})
export class LoginComponent {
  username = signal('');
  password = signal('');
  showPassword: boolean = false;
  errorMessage: string = '';

  constructor(private _router: Router, private _messageService:MessageService, private _authService:AuthService) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  login(form: NgForm) {
    if (form.invalid) {
      this.errorMessage = 'Por favor, complete todos los campos correctamente.';
      return;
    }

    this._authService.login(this.username(), this.password()).subscribe({
      next: (response) => {
        this._messageService.add({
          severity: 'success',
          summary: 'Operación Exitosa',
          detail: 'Redireccionando al Home.'
        });
        this._router.navigate(['/dashboard']);
      },
      error: () => {
        this.errorMessage = 'Credenciales incorrectas.';
      }
    });
  }

  show(){
    this._messageService.add({severity:'info', summary: 'Info', detail: 'Ha iniciado sesión correctamente.'});
  }

}

