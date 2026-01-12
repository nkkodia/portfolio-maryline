import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Pour la redirection
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html'
})
export class ServicesComponent {

  constructor(private router: Router) {}

  services: Service[] = [
    {
      title: 'Auto-Entrepreneur & Blog',
      description: 'Lancez votre marque personnelle avec un site élégant, un blog intégré et une identité forte.',
      icon: 'bi-person-badge',
      price: 'À partir de 100 000 FCFA (150€) TTC',
      features: ['Blog optimisé', 'Liens réseaux sociaux', 'Design personnel unique']
    },
    {
      title: 'Pack Vitrine Business',
      description: 'La solution complète pour les PME. Présentez vos services et captez des clients 24h/24.',
      icon: 'bi-display',
      price: 'À partir de 250 000 FCFA (380€) TTC',
      features: ['SEO local (Abidjan/CI)', 'Formulaire devis', 'Google Maps intégré']
    },
    {
      title: 'E-commerce Pro',
      description: 'Une boutique en ligne complète pour vendre vos produits partout en Côte d\'Ivoire.',
      icon: 'bi-cart-check-fill',
      price: 'À partir de 350 000 FCFA (500) TTC',
      features: ['Panier & Gestion de stocks', 'Paiement Mobile Money / Visa', 'Suivi des commandes']
    },
    {
      title: 'Application sur-mesure',
      description: 'Logiciels métiers complexes (Gestion, RH, Paiement) développés avec la puissance de Java/Spring.',
      icon: 'bi-cpu-fill',
      price: 'À partir de 600 000 FCFA (1 000€) TTC',
      features: ['Architecture Senior', 'Sécurité renforcée', 'Tableau de bord admin']
    },
  ];

  goToContact() {
    this.router.navigate(['/contact']);
  }
}
