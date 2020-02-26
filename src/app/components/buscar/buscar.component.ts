import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../servicios/spotify.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-buscar',
    templateUrl: './buscar.component.html',
    styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

    artistas:any[] = [];

    constructor(private _buscar:SpotifyService, private _ruta:Router) { }

    ngOnInit() {
    }

    buscarArt(palabra){

        this._buscar.getBuscar(palabra).subscribe(
            (respuesta:any)=>{
                console.log(respuesta);
                this.artistas = respuesta;
            }
        );
    }

    verArtista(id:any){
        this._ruta.navigate(['artista',id]);
    }

}
