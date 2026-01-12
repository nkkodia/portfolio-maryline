import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router';

interface Expertise {
  title: string;
  desc: string;
  icon: string;
  tech: string;
  delay: string; // On ajoute la propriété ici
}
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  expertises: Expertise[] = [
    {
      title: 'Architecture Backend',
      desc: 'Expertise Java/Spring Boot. Conception de microservices, gestion de bases de données SQL/NoSQL et intégration de systèmes de paiement.',
      icon: '⚙️',
      tech: 'Spring Boot • Hibernate • PostgreSQL',
      delay: 'delay-[100ms]'
    },
    {
      title: 'Frontend Moderne',
      desc: 'Développement d\'interfaces riches avec Angular. Maîtrise de RxJS, State Management (NgRx) et optimisation des performances web.',
      icon: '💻',
      tech: 'Angular • TypeScript • Tailwind CSS',
      delay: 'delay-[200ms]'
    },
    {
      title: 'DevOps & Cloud',
      desc: 'Conteneurisation d\'applications, mise en place de pipelines CI/CD et déploiement sur environnements Cloud.',
      icon: '☁️',
      tech: 'Docker • Kubernetes • Jenkins',
      delay: 'delay-[300ms]'
    },
    {
      title: 'Qualité & Maintenance',
      desc: 'Audit de code, refactoring complexe, tests automatisés (Unitaires/E2E) et résolution d\'incidents critiques en production.',
      icon: '🛡️',
      tech: 'JUnit • Cypress • SonarQube',
      delay: 'delay-[400ms]'
    }
  ];

  history = [
    {
      date: 'Depuis 2025',
      title: 'Développeuse Senior Full Stack',
      subtitle: 'Client Final',
      desc: 'Conception et développement de services de paiement en ligne et mise en place de mécanismes de sécurité avancés.',
      icon: '💳',
      color: 'bg-blue-500'
    },
    {
      date: '2020 - 2025',
      title: 'Développeuse Full Stack',
      subtitle: 'Société de Service',
      desc: 'Gestion de flotte, optimisation d\'algorithmes de routage et refonte du système de facturation via microservices Spring Boot.',
      icon: '🚚',
      color: 'bg-emerald-500'
    }
  ];
}
