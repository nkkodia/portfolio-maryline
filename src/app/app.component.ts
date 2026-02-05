import { Component, signal, OnInit } from '@angular/core'; // Ajout de OnInit
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// On déclare netlifyIdentity pour que TypeScript ne râle pas
declare var netlifyIdentity: any;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  // Changement du titre pour quelque chose de plus discret (mieux pour ton anonymat)
  protected readonly title = signal('Consulting IT');

  ngOnInit() {
    // On initialise le widget Netlify Identity
    if (typeof netlifyIdentity !== 'undefined') {

      // On récupère l'utilisateur actuel
      const user = netlifyIdentity.currentUser();

      // Si personne n'est connecté, on force l'ouverture de la popup
      if (!user) {
        netlifyIdentity.open();
      }

      // Optionnel : Si l'utilisateur se déconnecte, on rafraîchit la page pour tout bloquer
      netlifyIdentity.on('logout', () => {
        window.location.reload();
      });
    }
  }
}
