import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Project {
  title: string;
  category: string;
  image: string;
  link: string;
  tech: string;
  desc: string;
}

@Component({
  selector: 'app-realisations',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './realisations.component.html'
})
export class RealisationsComponent {

  projects: Project[] = [
    {
      title: 'Janice Alleme-Yamthieu',
      category: 'Bien-être & Méditation',
      image: 'janice.png',
      link: 'https://janiceallemeyamthieu.fr/meditations',
      tech: 'WordPress / Premium Design',
      desc: 'Création d’un univers zen et épuré pour une plateforme de méditations guidées. Optimisation du parcours utilisateur pour un accès fluide aux contenus audio.'
    },
    {
      title: 'Filadéo Corporate',
      category: 'Conseil & Stratégie',
      image: 'filadeo.png',
      link: 'https://janyslaurealleme.wixsite.com/filadeocorporate/professionnels',
      tech: 'Wix Business / UX Design',
      desc: 'Conception d’une vitrine institutionnelle pour une structure de conseil, mettant l’accent sur le professionnalisme et la clarté de l’offre B2B.'
    },

  ];

  constructor() {}
}
