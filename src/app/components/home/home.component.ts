import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { EnquiryComponent } from '../enquiry/enquiry.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,NavbarComponent,FooterComponent,CarouselComponent,EnquiryComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
