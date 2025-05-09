import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-card',
  imports: [],
  template: `
    <div class="card d-flex flex-column align-items-center">
      <div>
        <div class="product-name text-center">{{product.title}}</div>
        <button class="btn btn-primary">Ajouter au panier</button>
        @if (userIsAdmin) {
          <button class="btn btn-danger" (click)="handleProduct()">Supprimer</button>
        }
      </div>
    </div>
  `,
  styleUrl: './card-component.component.css'
})
export class CardComponentComponent {
  userIsAdmin :boolean = true;
  @Input() product: Product = {} as Product;
  @Output() deleteProduct = new EventEmitter<number>();

  handleProduct(){
    this.deleteProduct.emit(this.product.id);
  }
}
