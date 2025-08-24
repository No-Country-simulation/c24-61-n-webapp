import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-job',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.scss']
})
export class CreateJobComponent implements OnInit {
  
  jobForm: FormGroup;
  isSubmitting = false;

  jobTypes = [
    { value: 'full-time', label: 'Tiempo completo' },
    { value: 'part-time', label: 'Tiempo parcial' },
    { value: 'contract', label: 'Contrato' },
    { value: 'freelance', label: 'Freelance' }
  ];

  experienceLevels = [
    { value: 'entry', label: 'Junior (0-2 años)' },
    { value: 'mid', label: 'Mid-level (3-5 años)' },
    { value: 'senior', label: 'Senior (5+ años)' },
    { value: 'lead', label: 'Lead/Manager' }
  ];

  workModes = [
    { value: 'on-site', label: 'Presencial' },
    { value: 'remote', label: 'Remoto' },
    { value: 'hybrid', label: 'Híbrido' }
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.jobForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      company: ['', [Validators.required]],
      location: ['', [Validators.required]],
      jobType: ['full-time', [Validators.required]],
      experienceLevel: ['mid', [Validators.required]],
      workMode: ['on-site', [Validators.required]],
      salary: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(50)]],
      requirements: ['', [Validators.required, Validators.minLength(30)]],
      benefits: ['', [Validators.required, Validators.minLength(20)]],
      contactEmail: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.jobForm.valid) {
      this.isSubmitting = true;
      
      // Simulate API call
      setTimeout(() => {
        console.log('Nueva oferta creada:', this.jobForm.value);
        this.isSubmitting = false;
        this.router.navigate(['/dashboard']);
      }, 2000);
    } else {
      this.markFormGroupTouched();
    }
  }

  cancel(): void {
    this.router.navigate(['/dashboard']);
  }

  private markFormGroupTouched(): void {
    Object.keys(this.jobForm.controls).forEach(key => {
      const control = this.jobForm.get(key);
      control?.markAsTouched();
    });
  }

  getFieldError(fieldName: string): string {
    const field = this.jobForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) {
        return 'Este campo es requerido';
      }
      if (field.errors['minlength']) {
        return `Mínimo ${field.errors['minlength'].requiredLength} caracteres`;
      }
      if (field.errors['email']) {
        return 'Email inválido';
      }
    }
    return '';
  }
}
