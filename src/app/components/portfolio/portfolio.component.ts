import { CommonModule } from '@angular/common';
import {Component} from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html'
})
export class PortfolioComponent {
  projects = [
    {
      title: 'VibeStore',
      category: 'E-commerce',
      desc: 'Boutique de mode avec tunnel d\'achat optimisé.',
      techs: ['Angular', 'Stripe', 'Tailwind'],
      img: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800',
      delay: 'delay-[100ms]'
    },
    {
      title: 'Art & Co',
      category: 'Site Vitrine',
      desc: 'Portfolio minimaliste pour une galerie d\'art.',
      techs: ['Netlify', 'SEO', 'Design'],
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800',
      delay: 'delay-[200ms]'
    },
    {
      title: 'TechBlog',
      category: 'Blog / Média',
      desc: 'Système de gestion de contenu haute performance.',
      techs: ['Angular', 'Markdown', 'Firebase'],
      img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800',
      delay: 'delay-[300ms]'
    }
  ];
}
