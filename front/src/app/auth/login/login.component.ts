import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import {Toast } from 'primeng/toast';

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

  constructor(private _router: Router, private _messageService:MessageService) {}

  // Función para mostrar/ocultar la contraseña en el input
  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  // Función principal para manejar el proceso de login
  login(form: NgForm) {
    if (form.invalid) {
      this.errorMessage = 'Por favor, complete todos los campos correctamente.';
      return;
    }

    if (
      (this.username() === 'flaviosalasevicius@hotmail.com' && this.password() === 'Flavio2022') ||
      (this.username() === 'demo' && this.password() === 'demo123')
    ) {
      this._messageService.add({
        severity: 'success', 
        summary: 'Operación Exitosa', 
        detail: 'Redireccionando al Home.'
      });
      
      // Delay para asegurar que el mensaje se muestre antes de la navegación
      setTimeout(() => {
        this._router.navigate(['/home']);
      }, 1000);
    } else {
      this.errorMessage = 'Credenciales incorrectas.';
    }
  }

  // Función para realizar un login automático con credenciales de demo
  loginDemo() {
    this.username.set('demo');
    this.password.set('demo123');
    const demoForm = new NgForm([], []);
    this.login(demoForm);
  }

  // Función para mostrar mensaje de éxito
  show(){
    this._messageService.add({
      severity:'info', 
      summary: 'Info', 
      detail: 'Ha iniciado sesión correctamente.'
    });
  }

}
