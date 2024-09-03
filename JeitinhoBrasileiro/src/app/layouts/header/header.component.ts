import { Component } from '@angular/core';
import { ComponentesAngularModule } from '../../componentes-angular/componentes-angular.module';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ComponentesAngularModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
