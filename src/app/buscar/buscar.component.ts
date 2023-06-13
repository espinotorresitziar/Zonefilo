import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculaService } from '../services/pelicula.service';
import { Pelicula } from '../interfaces/peliculas';
import { SerieService } from '../services/serie.service';
import { Result } from '../interfaces/series';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  @Input('pelicula') pelicula: any
  texto: string = ''
  peliculas: Pelicula[] = []
  noExiste?: boolean
  series: Result[]=[]

  constructor( private activateRoute: ActivatedRoute, private peliculaService: PeliculaService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params=> {
      //onsole.log(params['texto'])
      this.texto = params['texto']

      this.peliculaService.buscarPeliculas(this.texto).subscribe(peliculas=>{
        if (peliculas.length > 0) {
          this.peliculas = peliculas
          this.noExiste = false
        } else {
          this.noExiste = true
        }
        //console.log(peliculas)
      })
    })
    
  }

}
