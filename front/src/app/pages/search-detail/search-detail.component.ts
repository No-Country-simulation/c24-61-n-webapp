import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './search-detail.component.html',
  styleUrl: './search-detail.component.scss'
})
export class SearchDetailComponent {
  empleoId: string | null = null;
  empleo: any = {
    titulo: 'Desarrollador Frontend',
    empresa: 'TechSolutions',
    ubicacion: 'Madrid, España',
    fecha: 'Hace 2 días',
    salario: '40,000€ - 55,000€',
    descripcion: 'Buscamos un desarrollador frontend con experiencia en React y TypeScript...',
    requisitos: [
      '3+ años de experiencia con React',
      'Experiencia con TypeScript',
      'Conocimientos de HTML, CSS y JavaScript',
      'Familiaridad con herramientas de control de versiones (Git)',
      'Experiencia con metodologías ágiles'
    ],
    responsabilidades: [
      'Desarrollar interfaces de usuario responsivas y accesibles',
      'Colaborar con diseñadores UX/UI y desarrolladores backend',
      'Implementar nuevas características y mantener el código existente',
      'Participar en revisiones de código y pruebas',
      'Optimizar aplicaciones para máximo rendimiento'
    ],
    beneficios: [
      'Horario flexible',
      'Trabajo remoto parcial',
      'Seguro médico',
      'Plan de pensiones',
      'Formación continua'
    ],
    empresaInfo: {
      nombre: 'TechSolutions',
      ubicacion: 'Madrid, España',
      empleados: '50-100 empleados',
      fundada: 'Fundada en 2010'
    }
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.empleoId = this.route.snapshot.paramMap.get('id');
  }
}
