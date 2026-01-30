import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import {ServicesComponent} from './components/services/services.component';
import {RealisationsComponent} from './components/realisations/realisations.component';

export const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contact', component: AboutComponent },
  { path: 'realisations', component: RealisationsComponent },
  { path: '**', redirectTo: '' }
];
