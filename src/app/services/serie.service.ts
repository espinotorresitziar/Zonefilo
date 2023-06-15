import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Result, SerieDetails, Series, TopLevel} from '../interfaces/series';
import { Cast, Credits } from '../interfaces/cast';
import { Video, Resulta } from '../interfaces/trailer';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  private API_URL: string = 'https://api.themoviedb.org/3'
  private seriePage = 1
  cargando = false

  constructor( private http: HttpClient ) {}

  get params(){
    return {
      api_key: '8014a4e5aa36b8683d70688b907c36c9',
      language: 'es-ES',
      page: this.seriePage.toString()
    }
  }

  getSeries(): Observable<Result[]> {

    if (this.cargando) {
      return of([])
    }

    this.cargando = true
    
    return this.http.get<Series>(`${this.API_URL}/trending/tv/day`,{params:this.params}).pipe(
      map((res)=>res.results),
      tap(()=>{
        this.seriePage+=1
        this.cargando=false
      })
    )
  }

  getDetalles(id: string) {
    return this.http.get<SerieDetails>(`${this.API_URL}/tv/${id}`, {
      params: this.params
    }).pipe(
      catchError(err=> of(null))
    )
  }

  getCast(id: string): Observable<Cast[]> {
    return this.http.get<Credits>(`${this.API_URL}/tv/${id}/credits`, {
      params: this.params 
    }).pipe(
      map(res=> res.cast),
      catchError(err=> of([]))
    )
  }

  buscarSeries(texto:string): Observable<Result[]> {
    const params = {...this.params, page:1, query:texto}
    return this.http.get<Series>(`${this.API_URL}/search/tv`, {
      params
    }).pipe(
      map(res=> res.results)
    )
  }

  getTrailer(id: string): Observable<Resulta[]> {
    return this.http.get<Video>(`${this.API_URL}/tv/${id}/video`, {
      params: this.params 
    }).pipe(
      map(res=> res.results),
      catchError(err=> of([]))
    )
  }

}
