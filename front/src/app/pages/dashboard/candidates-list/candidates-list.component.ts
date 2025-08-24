import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-candidates-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss']
})
export class CandidatesListComponent implements OnInit {
  
  candidates = [
    {
      id: 1,
      name: 'Carlos Rodríguez',
      email: 'carlos.rodriguez@email.com',
      position: 'Desarrollador Frontend',
      status: 'En revisión',
      statusClass: 'review',
      avatar: 'CR',
      appliedDate: 'Hace 2 días',
      experience: '3 años',
      location: 'Madrid, España'
    },
    {
      id: 2,
      name: 'Ana García',
      email: 'ana.garcia@email.com',
      position: 'Diseñador UX/UI',
      status: 'Entrevista programada',
      statusClass: 'interview',
      avatar: 'AG',
      appliedDate: 'Hace 1 día',
      experience: '5 años',
      location: 'Barcelona, España'
    },
    {
      id: 3,
      name: 'Miguel López',
      email: 'miguel.lopez@email.com',
      position: 'Product Manager',
      status: 'Aceptado',
      statusClass: 'accepted',
      avatar: 'ML',
      appliedDate: 'Hace 3 días',
      experience: '7 años',
      location: 'Remoto'
    },
    {
      id: 4,
      name: 'Laura Martínez',
      email: 'laura.martinez@email.com',
      position: 'Desarrollador Backend',
      status: 'Rechazado',
      statusClass: 'rejected',
      avatar: 'LM',
      appliedDate: 'Hace 1 semana',
      experience: '4 años',
      location: 'Valencia, España'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewCandidate(candidateId: number): void {
    console.log('Ver candidato:', candidateId);
  }

  scheduleInterview(candidateId: number): void {
    console.log('Programar entrevista para candidato:', candidateId);
  }

  updateStatus(candidateId: number, status: string): void {
    console.log('Actualizar estado del candidato:', candidateId, 'a:', status);
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }
}
