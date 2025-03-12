import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Location {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
}

interface TeamMember {
  id: number;
  name: string;
  position: string;
  avatar: string;
}

interface SocialMedia {
  linkedin: string;
  twitter: string;
  facebook: string;
  instagram: string;
}

interface Job {
  id: number;
  title: string;
  location: string;
  type: string;
  posted: string;
  description: string;  // Add this line
}

interface CompanyProfile {
  id: string;
  name: string;
  logo: string;
  industry: string;
  size: string;
  founded: string;
  website: string;
  description: string;
  mission: string;
  vision: string;
  values: string[];
  locations: Location[];
  benefits: string[];
  team: TeamMember[];
  socialMedia: SocialMedia;
  photos: string[];
  jobs: Job[];
}

@Component({
  selector: 'app-company-profiles',
  templateUrl: './company-profiles.component.html',
  styleUrls: ['./company-profiles.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class CompanyProfilesComponent implements OnInit {
  activeTab: string = 'about';
  company: CompanyProfile;

  constructor(private route: ActivatedRoute) {
    // Initialize company data
    this.company = {
      id: this.route.snapshot.params['id'],
      name: "TechSolutions",
      logo: "/placeholder.svg?height=100&width=100",
      industry: "Tecnología",
      size: "50-100 empleados",
      founded: "2010",
      website: "https://techsolutions.com",
      description: "TechSolutions es una empresa líder en desarrollo de software y soluciones tecnológicas innovadoras...",
      mission: "Nuestra misión es proporcionar soluciones tecnológicas innovadoras...",
      vision: "Ser reconocidos como líderes en innovación tecnológica...",
      values: [
        "Innovación constante",
        "Excelencia en el servicio",
        "Trabajo en equipo",
        "Integridad y transparencia",
        "Compromiso con el cliente"
      ],
      locations: [
        {
          id: 1,
          name: "Sede Central",
          address: "Calle Innovación, 123, 28001 Madrid",
          phone: "+34 91 123 45 67",
          email: "info@techsolutions.com"
        },
        {
          id: 2,
          name: "Oficina Barcelona",
          address: "Avenida Tecnología, 456, 08001 Barcelona",
          phone: "+34 93 234 56 78",
          email: "barcelona@techsolutions.com"
        }
      ],
      benefits: [
        "Horario flexible",
        "Trabajo remoto parcial",
        "Seguro médico privado",
        "Plan de pensiones",
        "Formación continua",
        "Eventos de equipo"
      ],
      team: [
        {
          id: 1,
          name: "Juan Díaz",
          position: "CEO & Fundador",
          avatar: "/placeholder.svg?height=60&width=60"
        },
        {
          id: 2,
          name: "Ana Gómez",
          position: "Directora de RRHH",
          avatar: "/placeholder.svg?height=60&width=60"
        },
        {
          id: 3,
          name: "Carlos Martínez",
          position: "CTO",
          avatar: "/placeholder.svg?height=60&width=60"
        }
      ],
      socialMedia: {
        linkedin: "https://linkedin.com/company/techsolutions",
        twitter: "https://twitter.com/techsolutions",
        facebook: "https://facebook.com/techsolutions",
        instagram: "https://instagram.com/techsolutions"
      },
      photos: [
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500"
      ],
      jobs: [
        {
          id: 1,
          title: "Desarrollador Frontend",
          location: "Madrid, España",
          type: "Tiempo completo",
          posted: "Hace 2 días",
          description: "Buscamos un desarrollador frontend con experiencia en Angular..."  // Add description
        },
        // ... more jobs
      ]
    };
  }

  ngOnInit() {
    // You can fetch the company data from an API here using the ID
    this.route.queryParams.subscribe(params => {
      this.activeTab = params['tab'] || 'about';
    });
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
