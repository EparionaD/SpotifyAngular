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
            'Authorization' : 'Bearer BQD-aBmZkUzY5RdzrE3Ltq5woB7uoC4TKGHU-fc-cgcS1dQKc_kAt4cBxXeB6ldQYHFt1hJRijP9cmD2Re4'
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

    getArtista(id:any){
        return this.getQuery(`artists/{${id}}`);
    }
}