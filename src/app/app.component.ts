import { Component } from '@angular/core';
import { NavbarComponent } from './features/navbar/navbar.component';
import { AppAffichageMajusculeComponent } from "./app-affichage-majuscule/app-affichage-majuscule.component";
import { AppAffichageDateComponent } from "./app-affichage-date/app-affichage-date.component";
import { ProductsComponentComponent } from "./products/products-component.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, AppAffichageMajusculeComponent, AppAffichageDateComponent, ProductsComponentComponent],
  template: 
  `
    {{title}} 
    <app-navbar /> 
    <app-app-affichage-majuscule />
    <app-app-affichage-date />
    <app-products />
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learn-book';
}
