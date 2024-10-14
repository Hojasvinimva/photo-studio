import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { BookASessionComponent } from './pages/book-a-session/book-a-session.component';
import { ClientComponent } from './pages/client/client.component';
import { NewbornComponent } from './pages/newborn/newborn.component';
import { PortraitComponent } from './pages/portrait/portrait.component';
import { SpecialtyComponent } from './pages/specialty/specialty.component';


export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'pricing',component:PricingComponent},
    {path:'book',component:BookASessionComponent},
    {path:'client',component:ClientComponent},
    {path:'newborn',component:NewbornComponent},
    {path:'portrait',component:PortraitComponent},
    {path:'specialty',component:SpecialtyComponent},
    ];
