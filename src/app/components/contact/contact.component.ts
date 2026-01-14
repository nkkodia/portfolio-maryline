import {Component} from '@angular/core';
import emailjs from '@emailjs/browser';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], // Assure-toi d'avoir ReactiveFormsModule
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  contactForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required], // Ajout du nom car présent dans ton HTML
      subject: ['', Validators.required],
      contactMethod: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  sendEmail() {
    console.log("Tentative d'envoi...");

    if (this.contactForm.valid) {
      const values = this.contactForm.value;

      const templateParams = {
        from_name: values.name,
        contact_info: values.contactMethod,
        subject: values.subject,
        message: values.message
      };

      emailjs.send(
        'service_0zp4wf5',
        'template_2dah04h',
        templateParams,
        '3YMl1r8RZqBgbPOxW'
      )
        .then(() => {
          this.contactForm.reset(); // On vide le formulaire
          this.router.navigate(['/']);
        }, (error) => {
          console.error('Erreur EmailJS:', error);
          alert('Petit souci technique... Écrivez-moi à marykodia1045@gmail.com');
        });
    } else {
      console.log("Le formulaire n'est pas rempli correctement.");
    }
  }
}
