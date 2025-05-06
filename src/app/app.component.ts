import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './features/navbar/navbar.component';
import { AppAffichageMajusculeComponent } from "./app-affichage-majuscule/app-affichage-majuscule.component";
import { AppAffichageDateComponent } from "./app-affichage-date/app-affichage-date.component";
import { CardComponentComponent } from "./card-component/card-component.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, AppAffichageMajusculeComponent, AppAffichageDateComponent, CardComponentComponent],
  template: 
  `
    {{title}} 
    <app-navbar /> 
    <app-app-affichage-majuscule />
    <app-app-affichage-date />
    <app-card />
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learn-book';
}
