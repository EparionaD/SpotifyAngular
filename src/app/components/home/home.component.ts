import { Component } from '@angular/core';
import { SpotifyService } from '../../servicios/spotify.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
    })
    export class HomeComponent  {

    albumnes:any[] = [];

    constructor(private _servicio:SpotifyService, private _ruta:Router){
        this._servicio.getAlbum().subscribe(
            (respuesta:any)=>{
                //console.log(respuesta);
                this.albumnes = respuesta;
            }
        );
    }

    verArtista(id:any){
        this._ruta.navigate(['artista',id]);
    }

}
