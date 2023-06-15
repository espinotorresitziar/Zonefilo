import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, map, tap, of, catchError } from 'rxjs';
import { Pelicula, PeliculasResponse } from '../interfaces/peliculas';
import { PeliculaDetails, } from '../interfaces/pelicula';
import { Cast, Credits } from '../interfaces/cast';
import { Tendencia, TopLevel } from '../interfaces/tendencias';
import { Resulta, Video } from '../interfaces/trailer';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  //clave API: 8014a4e5aa36b8683d70688b907c36c9
  //image: https://image.tmdb.org/t/p/original

  private API_URL: string = 'https://api.themoviedb.org/3'
  private peliculaPage = 1
  cargando = false

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

    if (this.cargando) {
      return of([])
    }

    this.cargando = true

    //console.log("Ver películas cargadas")
    
    return this.http.get<PeliculasResponse>(`${this.API_URL}/movie/now_playing`,{params:this.params}).pipe(
      map((res)=>res.results),
      tap(()=>{
        this.peliculaPage+=1
        this.cargando=false
      })
    )
  }

  buscarPeliculas(texto:string): Observable<Pelicula[]> {
    const params = {...this.params, page:1, query:texto}
    return this.http.get<PeliculasResponse>(`${this.API_URL}/search/movie`, {
      params
    }).pipe(
      map(res=> res.results)
    )
  }

  getDetalles(id: string) {
    return this.http.get<PeliculaDetails>(`${this.API_URL}/movie/${id}`, {
      params: this.params
    }).pipe(
      catchError(err=> of(null))
    )
  }

  getCast(id: string): Observable<Cast[]> {
    return this.http.get<Credits>(`${this.API_URL}/movie/${id}/credits`, {
      params: this.params 
    }).pipe(
      map(res=> res.cast),
      catchError(err=> of([]))
    )
  }

  getTodas(): Observable<Tendencia[]> {

    if (this.cargando) {
      return of([])
    }

    this.cargando = true
    
    return this.http.get<TopLevel>(`${this.API_URL}/trending/movie/day`,{params:this.params}).pipe(
      map((res)=>res.results),
      tap(()=>{
        this.peliculaPage+=1
        this.cargando=false
      })
    )
  }

  getTrailer(id: string): Observable<Resulta[]> {
    return this.http.get<Video>(`${this.API_URL}/movie/${id}/video`, {
      params: this.params 
    }).pipe(
      map(res=> res.results),
      catchError(err=> of([]))
    )
  }

  resetPage() {
    this.peliculaPage = 1
  }
}
