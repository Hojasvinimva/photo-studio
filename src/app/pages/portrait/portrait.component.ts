import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';



@Component({
  selector: 'app-portrait',
  standalone: true,
  imports: [HeaderComponent,NavbarComponent,],
  templateUrl: './portrait.component.html',
  styleUrl: './portrait.component.css'
})
export class PortraitComponent {

}
