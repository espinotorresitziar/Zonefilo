import { Component, HostListener, OnInit } from '@angular/core';
import { PeliculaService } from '../services/pelicula.service';
import { Pelicula } from '../interfaces/peliculas';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

  pelicula: Pelicula[]=[];
  peliculaSlideShow:Pelicula[]=[];

  @HostListener('window:scroll',['$event'])
  onScroll() {
    const pos = (document.documentElement.scrollTo || document.body.scrollTop);
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);


  }

  constructor(private peliculaService: PeliculaService) {}
    
  ngOnInit(): void {
    this.peliculaService.getPeliculas().subscribe(peliculas=>{
      this.peliculaSlideShow = peliculas;
      this.pelicula = peliculas
    })
  }
}
