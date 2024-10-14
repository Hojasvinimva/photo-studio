import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-book-a-session',
  standalone: true,
  imports: [RouterModule,NavbarComponent,HeaderComponent],
  templateUrl: './book-a-session.component.html',
  styleUrl: './book-a-session.component.css'
})
export class BookASessionComponent {

}
