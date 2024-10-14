import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';



@Component({
  selector: 'app-specialty',
  standalone: true,
  imports:  [RouterModule,HeaderComponent,NavbarComponent,],
  templateUrl: './specialty.component.html',
  styleUrl: './specialty.component.css'
})
export class SpecialtyComponent {

}
