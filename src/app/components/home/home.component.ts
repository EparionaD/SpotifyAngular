import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../servicios/spotify.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
    })
    export class HomeComponent implements OnInit {

    albumnes:any[] = [];

    constructor(private _servicio:SpotifyService){
        this._servicio.getAlbum().subscribe(
            (respuesta:any)=>{
                //console.log(respuesta);
                this.albumnes = respuesta.albums.items;
            }
        );
    }

    ngOnInit() {
    }

}
