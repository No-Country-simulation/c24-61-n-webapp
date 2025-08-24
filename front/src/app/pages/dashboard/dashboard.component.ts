import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  // User data
  currentUser = {
    name: 'Juan',
    avatar: 'JD'
  };

  // Key metrics
  keyMetrics = {
    activeOffers: 2,
    totalCandidates: 25,
    scheduledInterviews: 5,
    offersChange: '+1 desde el mes pasado',
    candidatesChange: '+8 desde el mes pasado',
    interviewsText: 'Para esta semana'
  };

  // Job offers
  jobOffers = [
    {
      id: 1,
      title: 'Desarrollador Frontend',
      timeAgo: 'Hace 2 días',
      location: 'Madrid, España',
      applicants: 12,
      status: 'Activa',
      statusClass: 'active'
    },
    {
      id: 2,
      title: 'Diseñador UX/UI',
      timeAgo: 'Hace 1 semana',
      location: 'Barcelona, España',
      applicants: 8,
      status: 'Activa',
      statusClass: 'active'
    },
    {
      id: 3,
      title: 'Product Manager',
      timeAgo: 'Hace 2 semanas',
      location: 'Remoto',
      applicants: 5,
      status: 'Cerrada',
      statusClass: 'closed'
    }
  ];

  // Recent activity
  recentActivity = [
    {
      id: 1,
      type: 'offer',
      message: 'Nueva oferta publicada: Desarrollador Frontend',
      timeAgo: 'Hace 2 días',
      icon: 'bi-file-earmark-text'
    },
    {
      id: 2,
      type: 'candidate',
      message: 'Nuevo candidato aplicó: Diseñador UX/UI',
      timeAgo: 'Hace 1 día',
      icon: 'bi-person-plus'
    },
    {
      id: 3,
      type: 'interview',
      message: 'Entrevista programada: Carlos Rodríguez',
      timeAgo: 'Hace 3 horas',
      icon: 'bi-calendar-check'
    }
  ];

  // Upcoming interviews
  upcomingInterviews = [
    {
      id: 1,
      candidateName: 'Carlos Rodríguez',
      jobTitle: 'Desarrollador Frontend',
      time: 'Mañana, 10:00 AM',
      avatar: 'CR'
    },
    {
      id: 2,
      candidateName: 'Ana García',
      jobTitle: 'Diseñador UX/UI',
      time: 'Jueves, 2:00 PM',
      avatar: 'AG'
    },
    {
      id: 3,
      candidateName: 'Miguel López',
      jobTitle: 'Product Manager',
      time: 'Viernes, 11:30 AM',
      avatar: 'ML'
    }
  ];

  // Navigation state
  activeTab = 'offers';
  sidebarCollapsed = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Initialize dashboard data
  }

  toggleSidebar(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  createNewOffer(): void {
    // Navigate to create new offer page
    this.router.navigate(['/dashboard/create-job']);
  }

  viewAllOffers(): void {
    // Navigate to all offers page
    console.log('Ver todas las ofertas');
  }

  viewJobDetails(jobId: number): void {
    // Navigate to job details page
    console.log('Ver detalles de oferta:', jobId);
  }

  logout(): void {
    // Handle logout
    console.log('Cerrar sesión');
    this.router.navigate(['/login']);
  }
}
