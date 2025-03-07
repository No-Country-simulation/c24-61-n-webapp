import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-jobs',
  imports: [CommonModule, RouterLink],
  templateUrl: './search-jobs.component.html',
  styleUrl: './search-jobs.component.scss'
})
export class SearchJobsComponent {  empleos = [
  {
    id: 1,
    titulo: 'Desarrollador Frontend',
    empresa: 'TechSolutions',
    ubicacion: 'Madrid, España',
    fecha: 'Hace 2 días',
    salario: '40,000€ - 55,000€',
    descripcion: 'Buscamos un desarrollador frontend con experiencia en React y TypeScript para unirse a nuestro equipo.'
  },
  {
    id: 2,
    titulo: 'Ingeniero de Software Backend',
    empresa: 'DataCorp',
    ubicacion: 'Barcelona, España',
    fecha: 'Hace 1 semana',
    salario: '45,000€ - 60,000€',
    descripcion: 'Desarrollador backend con experiencia en Node.js, Express y bases de datos SQL/NoSQL.'
  },
  {
    id: 3,
    titulo: 'Diseñador UX/UI',
    empresa: 'CreativeMinds',
    ubicacion: 'Valencia, España',
    fecha: 'Hace 3 días',
    salario: '35,000€ - 50,000€',
    descripcion: 'Diseñador UX/UI con experiencia en herramientas de diseño modernas y conocimientos de principios de usabilidad.'
  },
  {
    id: 4,
    titulo: 'DevOps Engineer',
    empresa: 'CloudSystems',
    ubicacion: 'Sevilla, España',
    fecha: 'Hace 5 días',
    salario: '50,000€ - 65,000€',
    descripcion: 'Ingeniero DevOps con experiencia en AWS, Docker, Kubernetes y CI/CD pipelines.'
  }
];
}
