import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

declare var netlifyIdentity: any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {

  logout() {
    if (typeof netlifyIdentity !== 'undefined') {
      netlifyIdentity.logout();
      // Le widget Netlify s'occupera de fermer la session
      // et notre code dans AppComponent rechargera la page pour verrouiller l'accès.
    }
  }
}
