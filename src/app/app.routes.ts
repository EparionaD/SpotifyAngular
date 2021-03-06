import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const rutas: Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: '',redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'buscar', component: BuscarComponent },
    { path: 'artista/:id', component: ArtistaComponent },
    { path: '**', component: NotfoundComponent },

];

export const app_rutas = RouterModule.forRoot(rutas);
