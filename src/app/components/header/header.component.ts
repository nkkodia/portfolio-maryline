import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  // Variable pour savoir si l'utilisateur a scrollé
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Si on scroll de plus de 50px, on change l'état
    this.isScrolled = window.scrollY > 50;
  }
}
