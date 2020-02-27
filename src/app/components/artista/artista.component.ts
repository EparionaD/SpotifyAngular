import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../servicios/spotify.service';

@Component({
    selector: 'app-artista',
    templateUrl: './artista.component.html',
    styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

    detalle:any={};
    play:any={};

    constructor(private _detallesRuta:ActivatedRoute, private _artistaid:SpotifyService){
        this._detallesRuta.params.subscribe(
            params=>{

                this._artistaid.getArtista(params.id).subscribe(
                    data=>{
                        //console.log(data);
                        this.detalle = data;
                    }
                );

                this._artistaid.getPlay(params.id).subscribe(
                    data1=>{
                        console.log(data1);
                        this.play = data1;
                    }
                );
            }
        );
    }

    ngOnInit() {
    }

}
