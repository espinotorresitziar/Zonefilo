import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, map, tap } from 'rxjs';
import { Pelicula, PeliculasResponse } from '../interfaces/peliculas';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  //clave API: 8014a4e5aa36b8683d70688b907c36c9
  //image: https://image.tmdb.org/t/p/original

  private API_URL: string = 'https://api.themoviedb.org/3'
  private peliculaPage = 1

  constructor( private http: HttpClient ) {}

  get params(){
    return {
      api_key: '8014a4e5aa36b8683d70688b907c36c9',
      language: 'es-ES',
      page: this.peliculaPage.toString()
    }
  }

  /*getPeliculas(search: string): Observable<any> {
    return this.http.get(`${this.API_URL}&s=${search}`)
  }*/

  getPeliculas(): Observable<Pelicula[]> {
    return this.http.get<PeliculasResponse>(`${this.API_URL}/movie/now_playing`,{params:this.params}).pipe(
      map((res)=>res.results),
      tap(()=>(
        this.peliculaPage+=1 
      ))
    )
  }
}
