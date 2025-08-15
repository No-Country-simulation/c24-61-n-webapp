import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

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
  description: string;
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
  imports: [CommonModule, RouterModule]
})
export class CompanyProfilesComponent implements OnInit, OnDestroy {
  activeTab: string = 'about';
  tabs = [
    { value: 'about', label: 'Sobre nosotros', icon: 'bi-building' },
    { value: 'jobs', label: 'Ofertas de empleo', icon: 'bi-briefcase' },
    { value: 'culture', label: 'Cultura y beneficios', icon: 'bi-people' },
    { value: 'gallery', label: 'Galería', icon: 'bi-images' }
  ];
  company!: CompanyProfile;
  isLoading: boolean = true;
  error: string | null = null;
  private readonly validTabs = ['about', 'jobs', 'culture', 'gallery'] as const;
  private destroy$ = new Subject<void>();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.initializeCompanyData();
    this.handleTabNavigation();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private handleTabNavigation(): void {
    this.route.queryParams
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (params) => {
          const tab = params['tab'];
          if (tab && this.tabs.some(t => t.value === tab)) {
            this.activeTab = tab;
          } else {
            this.handleInvalidTab();
          }
        },
        error: (error) => {
          console.error('Error in query params subscription:', error);
          this.error = 'Error loading tab';
        }
      });
  }

  private handleInvalidTab(): void {
    const urlTree = this.router.createUrlTree([], {
      relativeTo: this.route,
      queryParams: { tab: 'about' },
      queryParamsHandling: 'merge'
    });
    this.router.navigateByUrl(urlTree);
  }

  private getCompanyData(companyId: string): CompanyProfile {
    const companies: Record<string, CompanyProfile> = {
      'techsolutions': {
        id: 'techsolutions',
        name: "TechSolutions",
        logo: "https://res.cloudinary.com/dpejs2euf/image/upload/c_fill,,f_png,g_face,h_320,w_320/r_max/v1741802366/techSolutions_ukdk36.png",
        industry: "Tecnología",
        size: "50-100 empleados",
        founded: "2010",
        website: "https://tech-solutions.com.ar/",
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
          "https://res.cloudinary.com/dpejs2euf/image/upload/t_Banner 16:9/v1741714969/samples/imagecon-group.jpg",
          "https://res.cloudinary.com/dpejs2euf/image/upload/t_Banner 16:9/v1741801507/istockphoto-1325276224-612x612_esabgj.jpg",
          "https://res.cloudinary.com/dpejs2euf/image/upload/t_Banner 16:9/v1741803098/istockphoto-1363104923-612x612_hficif.jpg",
          "https://res.cloudinary.com/dpejs2euf/image/upload/t_Banner 16:9/v1741803620/istockphoto-1265176826-612x612_vldkjg.jpg",
        ],
        jobs: [
          {
            id: 1,
            title: "Desarrollador Frontend",
            location: "Madrid, España",
            type: "Tiempo completo",
            posted: "Hace 2 días",
            description: "Buscamos un desarrollador frontend con experiencia en Angular..."
          },
          // ... more jobs
        ]
      },
      'datacorp': {
        id: 'datacorp',
        name: "DataCorp Analytics",
        logo: "/placeholder.svg?height=100&width=100",
        industry: "Análisis de Datos",
        size: "100-250 empleados",
        founded: "2015",
        website: "https://datacorp-analytics.com",
        description: "DataCorp es líder en soluciones de análisis de datos y Business Intelligence...",
        mission: "Transformar datos en decisiones inteligentes para nuestros clientes...",
        vision: "Ser el referente global en análisis de datos y BI...",
        values: [
          "Excelencia analítica",
          "Innovación continua",
          "Privacidad y seguridad",
          "Colaboración",
          "Orientación al cliente"
        ],
        locations: [
          {
            id: 1,
            name: "Sede Principal",
            address: "Paseo de la Castellana 200, Madrid",
            phone: "+34 91 555 44 33",
            email: "contacto@datacorp.com"
          }
        ],
        benefits: [
          "Trabajo 100% remoto",
          "Seguro médico internacional",
          "Presupuesto para formación",
          "Horario flexible",
          "Bonus anual"
        ],
        team: [
          {
            id: 1,
            name: "María Sánchez",
            position: "CEO",
            avatar: "/placeholder.svg?height=60&width=60"
          }
        ],
        socialMedia: {
          linkedin: "https://linkedin.com/company/datacorp",
          twitter: "https://twitter.com/datacorp",
          facebook: "https://facebook.com/datacorp",
          instagram: "https://instagram.com/datacorp"
        },
        photos: [
          "/placeholder.svg?height=300&width=500",
          "/placeholder.svg?height=300&width=500"
        ],
        jobs: [
          {
            id: 1,
            title: "Data Scientist Senior",
            location: "Remoto",
            type: "Tiempo completo",
            posted: "Hace 5 días",
            description: "Buscamos Data Scientist con experiencia en ML..."
          }
        ]
      },
      'creativeminds': {
        id: 'creativeminds',
        name: "CreativeMinds Studio",
        logo: "/placeholder.svg?height=100&width=100",
        industry: "Diseño y Marketing Digital",
        size: "25-50 empleados",
        founded: "2018",
        website: "https://creativeminds.studio",
        description: "Estudio creativo especializado en diseño de marca y marketing digital...",
        mission: "Crear experiencias digitales únicas y memorables...",
        vision: "Redefinir los estándares del diseño digital...",
        values: [
          "Creatividad sin límites",
          "Diseño centrado en el usuario",
          "Pasión por la excelencia",
          "Innovación constante"
        ],
        locations: [
          {
            id: 1,
            name: "Estudio Principal",
            address: "Calle Gran Vía 41, Madrid",
            phone: "+34 91 777 88 99",
            email: "hola@creativeminds.studio"
          }
        ],
        benefits: [
          "Jornada intensiva en verano",
          "Teletrabajo 3 días/semana",
          "Presupuesto para equipamiento",
          "Clases de inglés",
          "Eventos creativos mensuales"
        ],
        team: [
          {
            id: 1,
            name: "Pablo Ruiz",
            position: "Director Creativo",
            avatar: "/placeholder.svg?height=60&width=60"
          }
        ],
        socialMedia: {
          linkedin: "https://linkedin.com/company/creativeminds",
          twitter: "https://twitter.com/creativeminds",
          facebook: "https://facebook.com/creativeminds",
          instagram: "https://instagram.com/creativeminds.studio"
        },
        photos: [
          "/placeholder.svg?height=300&width=500",
          "/placeholder.svg?height=300&width=500"
        ],
        jobs: [
          {
            id: 1,
            title: "UI/UX Designer",
            location: "Madrid",
            type: "Tiempo completo",
            posted: "Hace 1 día",
            description: "Buscamos diseñador UI/UX con portfolio destacado..."
          }
        ]
      }
    };

    const defaultCompanies = ['techsolutions', 'datacorp'];
    return companies[companyId] || companies[defaultCompanies.find(id => companies[id]) || 'techsolutions'];
  }

  private initializeCompanyData(): void {
    try {
      const companyId = this.route.snapshot.params['id'];
      if (!companyId) {
        throw new Error('Company ID is required');
      }
      this.company = this.getCompanyData(companyId);
      this.isLoading = false;
    } catch (error) {
      console.error('Error initializing company data:', error);
      this.error = 'Error loading company data';
      this.isLoading = false;
    }
  }
}
