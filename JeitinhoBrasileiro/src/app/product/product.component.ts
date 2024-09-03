import { Component } from '@angular/core';
import { ComponentesAngularModule } from '../componentes-angular/componentes-angular.module';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ComponentesAngularModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  product = {
    name: 'Açai',
    price: 15.00,
    imageUrl: 'assets/images/acai.png',
    description: 'Descricao e ou detalhes sobre o produto em questão'
  };
  quantity = 1;
  cep = '';

  constructor() {}

  ngOnInit(): void {
    // Aqui você pode buscar os dados do produto de uma API, por exemplo
  }

  buyProduct(): void {
    // Lógica para comprar o produto
    alert(`Produto comprado! Quantidade: ${this.quantity}, CEP: ${this.cep}`);
  }
}
