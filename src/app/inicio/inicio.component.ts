import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { PeliculaService } from '../services/pelicula.service';
import { Pelicula } from '../interfaces/peliculas';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit, OnDestroy{

  pelicula: Pelicula[]=[];
  peliculaSlideShow:Pelicula[]=[];

  @HostListener('window:scroll',['$event'])
  onScroll() {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop)*1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if (pos > max) {
      this.peliculaService.getPeliculas().subscribe(peliculas=>{
        this.pelicula.push(...peliculas)
      })
    }
  }

  constructor(private peliculaService: PeliculaService) {} 
    
  
  ngOnInit(): void {
    this.peliculaService.getPeliculas().subscribe(peliculas=>{
      this.peliculaSlideShow = peliculas;
      this.pelicula = peliculas
    })
  }

  ngOnDestroy(){
    this.peliculaService.resetPage();
  }
}
