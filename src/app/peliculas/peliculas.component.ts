import { Component, Input, OnInit, HostListener } from '@angular/core';
import { PeliculaService } from '../services/pelicula.service';
import { Pelicula } from '../interfaces/peliculas';
import { Tendencia } from '../interfaces/tendencias';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  @Input() pelicula?:Tendencia[];

  tendencia: Tendencia[]=[];

  constructor(private peliculaService: PeliculaService, private router: Router) { }

  @HostListener('window:scroll',['$event'])
  onScroll() {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop)*1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if (pos > max) {
      this.peliculaService.getTodas().subscribe(tendencias=>{
        this.tendencia.push(...tendencias)
      })
    }
  }
  
  ngOnInit(): void {
    this.peliculaService.getTodas().subscribe(tendencias=>{
      this.tendencia = tendencias
      console.log(tendencias)
    })
  }

  onMovieClick(tendencia:Tendencia){


    this.router.navigate(["/pelicula", tendencia.id])
    

  }

  /*getPeliculas(search: string) {
    this.peliculaService.getPeliculas(search).subscribe(data => {
      console.log(data)
    })
  }*/
}
