import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-details',
  templateUrl: './about-details.component.html',
  styleUrls: ['./about-details.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class AboutDetailsComponent {
  teamMembers = [
    {
      id: 1,
      name: "Ana García",
      position: "CEO & Fundadora",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Con más de 15 años de experiencia en RRHH y tecnología, Ana fundó TalentHub con la visión de transformar el proceso de reclutamiento.",
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      position: "CTO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Ingeniero de software con experiencia en startups tecnológicas, Carlos lidera el desarrollo de nuestra plataforma.",
    },
    {
      id: 3,
      name: "Laura Martínez",
      position: "Directora de Operaciones",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Especialista en procesos y operaciones, Laura asegura que TalentHub funcione de manera eficiente y escalable.",
    },
    {
      id: 4,
      name: "Miguel Fernández",
      position: "Director de Marketing",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Con experiencia en marketing digital y growth hacking, Miguel lidera las estrategias para el crecimiento de TalentHub.",
    }
  ];

  values = [
    {
      icon: 'bi bi-lightbulb',
      title: 'Innovación',
      description: 'Buscamos constantemente nuevas formas de mejorar la experiencia de reclutamiento, aplicando tecnologías emergentes y metodologías innovadoras.'
    },
    {
      icon: 'bi bi-shield-check',
      title: 'Transparencia',
      description: 'Creemos en procesos claros y abiertos, tanto en nuestra comunicación interna como en la forma en que conectamos empresas y candidatos.'
    },
    {
      icon: 'bi bi-graph-up',
      title: 'Impacto',
      description: 'Nos esforzamos por generar un impacto positivo en la vida profesional de las personas y en el éxito de las empresas que confían en nosotros.'
    }
  ];
}
