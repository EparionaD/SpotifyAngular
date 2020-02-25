import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../servicios/spotify.service';

@Component({
    selector: 'app-buscar',
    templateUrl: './buscar.component.html',
    styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

    artistas:any[] = [];

    constructor(private _buscar:SpotifyService) { }

    ngOnInit() {
    }

    buscarArt(palabra){

        this._buscar.getBuscar(palabra).subscribe(
            (respuesta:any)=>{
                console.log(respuesta);
                this.artistas = respuesta.artists.items;
            }
        );
    }


}
