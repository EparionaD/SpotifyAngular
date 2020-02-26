import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { app_rutas } from './app.routes';

//Servicios
import { HttpClientModule } from '@angular/common/http';

//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { ArtistaComponent } from './components/artista/artista.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        BuscarComponent,
        NotfoundComponent,
        ImagenPipe,
        ArtistaComponent
    ],
    imports: [
        BrowserModule,
        app_rutas,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
