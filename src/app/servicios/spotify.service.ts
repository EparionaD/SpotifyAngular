import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SpotifyService {

    constructor(private http:HttpClient){
    }

    getAlbum(){
        const headers = new HttpHeaders({
            'Authorization' : 'Bearer BQD8E3oQAgRE8FF8i_c7k9QSHGUxppGEVedtpdppfMa67MRD9G4P7WlQ2viNIE5O7EVAit4gNo3LSqiIo5M'
        });

        return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
    }
    getBuscar(artista){
        const headers = new HttpHeaders({
            'Authorization' : 'Bearer BQD8E3oQAgRE8FF8i_c7k9QSHGUxppGEVedtpdppfMa67MRD9G4P7WlQ2viNIE5O7EVAit4gNo3LSqiIo5M'
        });

        return this.http.get(`https://api.spotify.com/v1/search?q=${artista}&type=artist&limit=18`, {headers});
    }
}