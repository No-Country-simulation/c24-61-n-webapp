import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { Toast } from 'primeng/toast';
import { AuthService } from '../../core/services/auth.services';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink, ButtonModule, Toast],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [MessageService]
})
export class LoginComponent {
  loginForm: FormGroup;
  showPassword: boolean = false;
  errorMessage: string = '';

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _messageService: MessageService,
    private _authService: AuthService
  ) {
    console.log('FormBuilder:', this._fb);

    this.loginForm = this._fb?.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }


  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  ngOnInit(): void {
    console.log('Verificando autenticación...');
    const userLoggedIn = this._authService.isAuthenticated();
    console.log('Usuario autenticado:', userLoggedIn);

    if (userLoggedIn) {
      this._router.navigate(['/home']);
    }
  }

  onSubmit(): void {
    console.log('Formulario enviado:', this.loginForm.value);

    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this._authService.login(email, password).subscribe(
        (response) => {
          console.log('Respuesta de login:', response);
          const onboardingComplete = response.onboardingComplete ?? false;
          this._authService.saveSession(response.jwt);

          this._messageService.add({ severity: 'success', summary: 'Operación Exitosa', detail: 'Ingresando a la plataforma.' });

          setTimeout(() => {
            this._router.navigate([onboardingComplete ? '/home' : '/login']);
          }, 1000);
        },
        (error) => {
          console.error('Error en el login:', error);
          this._messageService.add({ severity: 'error', summary: 'Error', detail: 'Error en el login. Verifica tus credenciales.' });
        }
      );
    } else {
      console.warn('El formulario no es válido:', this.loginForm);
    }
  }

  show() {
    this._messageService.add({ severity: 'info', summary: 'Info', detail: 'Ha iniciado sesión correctamente.' });
  }
}
