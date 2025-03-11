import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Company {
  id: string;
  name: string;
  logo: string;
  industry: string;
  location: string;
  size: string;
  description: string;
  openPositions: number;
}

interface Benefit {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

interface Testimonial {
  id: number;  // Added id field
  rating: number;
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

interface FAQ {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class CompaniesComponent {
  featuredCompanies: Company[] = [
    {
      id: '1',
      name: "TechSolutions",
      logo: "/assets/images/placeholder.svg",
      industry: "Tecnología",
      location: "Madrid, España",
      size: "50-100 empleados",
      description: "Empresa líder en desarrollo de software y soluciones tecnológicas innovadoras.",
      openPositions: 5,
    },
    {
      id: '2',
      name: "DataCorp",
      logo: "/assets/images/placeholder.svg",
      industry: "Análisis de Datos",
      location: "Barcelona, España",
      size: "100-250 empleados",
      description: "Especialistas en big data, análisis predictivo y soluciones de inteligencia empresarial.",
      openPositions: 3,
    },
    {
      id: '3',
      name: "CreativeMinds",
      logo: "/assets/images/placeholder.svg",
      industry: "Diseño y Marketing",
      location: "Valencia, España",
      size: "25-50 empleados",
      description: "Agencia creativa especializada en diseño UX/UI y estrategias de marketing digital.",
      openPositions: 2,
    },
    {
      id: '4',
      name: "CloudSystems",
      logo: "/assets/images/placeholder.svg",
      industry: "Infraestructura Cloud",
      location: "Sevilla, España",
      size: "50-100 empleados",
      description: "Proveedor de soluciones cloud y servicios de infraestructura para empresas.",
      openPositions: 4,
    },
    {
      id: '5',
      name: "FinTech Innovations",
      logo: "/assets/images/placeholder.svg",
      industry: "Tecnología Financiera",
      location: "Bilbao, España",
      size: "25-50 empleados",
      description: "Desarrolladores de soluciones tecnológicas para el sector financiero y bancario.",
      openPositions: 2,
    },
    {
      id: '6',
      name: "HealthTech",
      logo: "/assets/images/placeholder.svg",
      industry: "Tecnología Médica",
      location: "Málaga, España",
      size: "50-100 empleados",
      description: "Innovación en tecnología aplicada al sector de la salud y bienestar.",
      openPositions: 3,
    }
  ];

  beneficios: Benefit[] = [
    {
      icon: "people",
      title: "Acceso a talento cualificado",
      description: "Conecta con profesionales altamente cualificados y específicamente interesados en tu sector y ofertas.",
      features: [
        "Base de datos de candidatos verificados",
        "Filtros avanzados de búsqueda",
        "Matching inteligente de perfiles"
      ]
    },
    {
      icon: "building",
      title: "Optimización del proceso",
      description: "Reduce el tiempo y los recursos dedicados al reclutamiento con nuestras herramientas especializadas.",
      features: [
        "Gestión centralizada de candidatos",
        "Automatización de tareas repetitivas",
        "Seguimiento del proceso en tiempo real"
      ]
    },
    {
      icon: "globe",
      title: "Visibilidad y marca empleadora",
      description: "Mejora la visibilidad de tu empresa y fortalece tu marca como empleador.",
      features: [
        "Perfil de empresa personalizado",
        "Promoción destacada de ofertas",
        "Análisis de rendimiento y métricas"
      ]
    }
  ];

  testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "TalentHub ha transformado nuestra forma de reclutar talento. Hemos reducido el tiempo de contratación en un 40% y mejorado significativamente la calidad de nuestros candidatos.",
      author: "María González",
      position: "Directora de RRHH",
      company: "TechSolutions",
      image: "/assets/images/placeholder.svg",
      rating: 5
    },
    {
      id: 2,
      quote: "La plataforma nos ha permitido encontrar perfiles muy específicos que eran difíciles de localizar por otros medios. El sistema de filtrado y la calidad de los candidatos es excepcional.",
      author: "Carlos Rodríguez",
      position: "CEO",
      company: "DataCorp",
      image: "/assets/images/placeholder.svg",
      rating: 5
    },
    {
      id: 3,
      quote: "Como startup, necesitábamos una solución eficiente y económica para nuestras necesidades de reclutamiento. TalentHub superó todas nuestras expectativas.",
      author: "Laura Martínez",
      position: "Fundadora",
      company: "CreativeMinds",
      image: "/assets/images/placeholder.svg",
      rating: 5
    }
  ];

  faqs: FAQ[] = [
    {
      question: "¿Cómo puedo registrar mi empresa en TalentHub?",
      answer: "El proceso es sencillo. Solo necesitas registrarte como reclutador, completar el perfil de tu empresa con la información relevante y comenzar a publicar ofertas de empleo."
    },
    {
      question: "¿Cuánto cuesta utilizar la plataforma?",
      answer: "Ofrecemos diferentes planes adaptados a las necesidades de cada empresa, desde un plan básico gratuito hasta planes premium con funcionalidades avanzadas. Puedes consultar todos los detalles en nuestra sección de precios."
    },
    {
      question: "¿Puedo gestionar múltiples ofertas de empleo simultáneamente?",
      answer: "Sí, nuestra plataforma está diseñada para gestionar múltiples procesos de selección de forma simultánea, con herramientas específicas para organizar candidatos por oferta y etapa del proceso."
    },
    {
      question: "¿Cómo se garantiza la calidad de los candidatos?",
      answer: "Utilizamos un sistema de verificación de perfiles y algoritmos de matching que aseguran que solo los candidatos más relevantes para tu oferta aparezcan en tus resultados de búsqueda."
    },
    {
      question: "¿Puedo integrar TalentHub con otros sistemas de RRHH?",
      answer: "Sí, ofrecemos APIs y opciones de integración con los principales sistemas de gestión de recursos humanos y ATS del mercado para facilitar la sincronización de datos."
    },
    {
      question: "¿Qué soporte técnico ofrecen?",
      answer: "Proporcionamos soporte técnico por chat, correo electrónico y teléfono en horario laboral. Los clientes con planes premium disfrutan de soporte prioritario y un gestor de cuenta dedicado."
    }
  ];

  // Helper method for star rating
  getStarsArray(rating: number): number[] {
    return Array(rating).fill(0);
  }

  // Add your component logic here
}
