import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';


@Component({
  selector: 'app-newborn',
  standalone: true,
  imports: [HeaderComponent,NavbarComponent,],
  templateUrl: './newborn.component.html',
  styleUrl: './newborn.component.css'
})
export class NewbornComponent {

}
