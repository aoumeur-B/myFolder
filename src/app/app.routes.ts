import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';


export const ROUTES: Routes = [
    { path: '', component: HomeComponent }, // l'adress url de la page d'acceuil
    { path: 'search', component: SearchComponent } // l'adresse de la page searche url\film
];
