import { Component } from '@angular/core';
import { ProductsComponentComponent } from "../products-component/products-component.component";

@Component({
  selector: 'app-card',
  imports: [ProductsComponentComponent],
  template: `
    <div class="card d-flex flex-column align-items-center">
      <div>
        <app-products />
        <button class="btn btn-primary">Ajouter au panier</button>
        @if (userIsAdmin) {
          <button class="btn btn-danger">Supprimer</button>
        }
      </div>
    </div>
  `,
  styleUrl: './card-component.component.css'
})
export class CardComponentComponent {
  userIsAdmin :boolean = true;
}
