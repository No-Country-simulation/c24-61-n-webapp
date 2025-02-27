import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink, Toast],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  providers: [MessageService]
})
export class RegisterComponent {
  registerForm: FormGroup;
  username = signal('');
  password = signal('');
  passwordConfirm = signal('');
  showPassword = signal(false);
  showPassword2 = signal(false);
  errorMessage = signal('');

  constructor(private fb: FormBuilder, private _router: Router, private _messageService:MessageService) {
    this.registerForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        passwordConfirm: ['', Validators.required]
      },
      { validators: this.passwordsMatch }
    );

    this.registerForm.get('username')?.valueChanges.subscribe(value => this.username.set(value));
    this.registerForm.get('password')?.valueChanges.subscribe(value => {
      this.password.set(value);
      this.registerForm.updateValueAndValidity();
    });
    this.registerForm.get('passwordConfirm')?.valueChanges.subscribe(value => {
      this.passwordConfirm.set(value);
      this.registerForm.updateValueAndValidity();
    });
  }

  passwordMismatch = computed(() => {
    return this.registerForm.hasError('passwordsNotMatching') && this.registerForm.get('passwordConfirm')?.touched;
  });

  passwordsMatch(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('passwordConfirm')?.value;

    return password === confirmPassword ? null : { passwordsNotMatching: true };
  }

  togglePassword() {
    this.showPassword.update(value => !value);
  }

  togglePassword2() {
    this.showPassword2.update(value => !value);
  }

  register() {
    if (this.registerForm.invalid) {
      this.errorMessage.set('Por favor, complete todos los campos correctamente.');
      return;
    }else{
      this._messageService.add({severity:'info', summary: 'Info', detail: 'Registro exitoso.'});

    }

  }
}
