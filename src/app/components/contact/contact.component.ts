import {Component} from '@angular/core';
import emailjs from '@emailjs/browser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html'
})
export class ContactComponent {

  constructor(private router: Router) {}

  sendEmail() {
    // On récupère les données
    const templateParams = {
      from_name: (document.getElementById('name') as HTMLInputElement).value,
      contact_info: (document.getElementById('contact_info') as HTMLInputElement).value,
      subject: (document.getElementById('subject') as HTMLInputElement).value,
      message: (document.getElementById('message') as HTMLTextAreaElement).value
    };

    // Envoi via EmailJS (Remplace par tes clés)
    emailjs.send('service_0zp4wf5', 'template_2dah04h', templateParams, '3YMl1r8RZqBgbPOxW')
      .then(() => {
        alert('Votre message est bien parti ! ✨');
        this.router.navigate(['/']);
      }, (error) => {
        console.error('Erreur:', error);
        alert('Petit souci technique... Vous pouvez m\'écrire à marykodia1045@gmail.com');
      });
  }
}
