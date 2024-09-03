import { Component } from '@angular/core';
import { ComponentesAngularModule } from '../componentes-angular/componentes-angular.module';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ComponentesAngularModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products = [
    {
      name: 'acai',
      image: 'assets/images/acai.png',
      price: 100.00
    },
    {
      name: 'acai',
      image: 'assets/images/acai.png',
      price: 100.00
    },
    {
      name: 'acai',
      image: 'assets/images/acai.png',
      price: 100.00
    },
    {
      name: 'acai',
      image: 'assets/images/acai.png',
      price: 100.00
    },
    {
      name: 'acai',
      image: 'assets/images/acai.png',
      price: 100.00
    },
  ];
}