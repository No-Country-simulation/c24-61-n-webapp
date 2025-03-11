import { Component } from '@angular/core';

@Component({
  selector: 'app-company-features',
  imports: [],
  templateUrl: './company-features.component.html',
  styleUrl: './company-features.component.scss',
})
export class CompanyFeaturesComponent {
  empresas: any[] = [
    {
      nombre: 'TechSolutions',
      sector: 'Tecnología',
      ubicacion: 'Madrid, España',
      empleados: '50-100 empleados',
      descripcion:
        'Empresa líder en desarrollo de software y soluciones tecnológicas innovadoras.',
      vacantes: 5,
    },
    {
      nombre: 'DataCorp',
      sector: 'Análisis de Datos',
      ubicacion: 'Barcelona, España',
      empleados: '100-250 empleados',
      descripcion:
        'Especialistas en big data, análisis predictivo y soluciones de inteligencia empresarial.',
      vacantes: 3,
    },
    {
      nombre: 'CloudSystems',
      sector: 'Infraestructura Cloud',
      ubicacion: 'Sevilla, España',
      empleados: '50-100 empleados',
      descripcion:
        'Proveedor de soluciones cloud y servicios de infraestructura para empresas.',
      vacantes: 4,
    },
    {
      nombre: 'FinTech Innovations',
      sector: 'Tecnología Financiera',
      ubicacion: 'Bilbao, España',
      empleados: '25-50 empleados',
      descripcion:
        'Desarrolladores de soluciones tecnológicas para el sector financiero y bancario.',
      vacantes: 2,
    },
    {
      nombre: 'CreativeMinds',
      sector: 'Diseño y Marketing',
      ubicacion: 'Valencia, España',
      empleados: '25-50 empleados',
      descripcion:
        'Agencia creativa especializada en diseño UX/UI y estrategias de marketing digital.',
      vacantes: 2,
    },
    {
      nombre: 'HealthTech',
      sector: 'Tecnología Médica',
      ubicacion: 'Málaga, España',
      empleados: '50-100 empleados',
      descripcion:
        'Innovación en tecnología aplicada al sector de la salud y bienestar.',
      vacantes: 3,
    },
  ];
}
