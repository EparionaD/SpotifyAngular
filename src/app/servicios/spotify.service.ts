import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SpotifyService {

    constructor(private http:HttpClient){
    }

    getQuery(query){
        const headers = new HttpHeaders({
            'Authorization' : 'Bearer BQAU_Bi7ahDVfRe1yiNyjk1X8gL17YEjRScZMOhalQikXiE3E3x3zrDBeSVu7LB0Oc42FSBavmcTW6F6ayc'
        });

        const url = `https://api.spotify.com/v1/${query}`;

        return this.http.get(url, {headers});
    }

    getAlbum(){
        /*const headers = new HttpHeaders({  //Se comento porque se factorizo en la funcion getQuery
            'Authorization' : 'Bearer BQACh8w-djOJp24Qs7ZooviLBxfau60bRCipf4pU7NSUKdHxICysycLdT8wunVRNU4C0qyHOpFjpP2-Mtqg'
        });*/
        /*return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});*/
        return this.getQuery('browse/new-releases').pipe(map((data:any)=>data.albums.items));
    }
    getBuscar(artista){
         /*const headers = new HttpHeaders({ //Se comento porque se factorizo en la funcion getQuery
            'Authorization' : 'Bearer BQACh8w-djOJp24Qs7ZooviLBxfau60bRCipf4pU7NSUKdHxICysycLdT8wunVRNU4C0qyHOpFjpP2-Mtqg'
        });*/
        /*return this.http.get(`https://api.spotify.com/v1/search?q=${artista}&type=artist&limit=18`, {headers});*/
        return this.getQuery(`search?q=${artista}&type=artist&limit=18`).pipe(map((data:any)=>data.artists.items));
    }

    getArtista(id:string){
        return this.getQuery(`artists/${id}`);
    }

    getPlay(id:string){
        return this.getQuery(`artists/${id}/top-tracks?country=PE`).pipe(map((data:any)=>data.tracks));
    }
}