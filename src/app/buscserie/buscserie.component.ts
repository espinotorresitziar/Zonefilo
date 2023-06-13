import { Component, OnInit, Input } from '@angular/core';
import { Result } from '../interfaces/series';
import { ActivatedRoute } from '@angular/router';
import { SerieService } from '../services/serie.service';
import { Pelicula } from '../interfaces/peliculas';

@Component({
  selector: 'app-buscserie',
  templateUrl: './buscserie.component.html',
  styleUrls: ['./buscserie.component.css']
})
export class BuscserieComponent implements OnInit{
  @Input('serie') serie: any
  texto: string = ''
  noExiste?: boolean
  series: Result[]=[]

  constructor( private activateRoute: ActivatedRoute, private serieService: SerieService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params=> {
      //onsole.log(params['texto'])
      this.texto = params['texto']

      
    this.serieService.buscarSeries(this.texto).subscribe(series=>{
      if (series.length > 0) {
        this.series = series
        this.noExiste = false
      } else {
        this.noExiste = true
      }
      console.log(series)
    })
    })
  }
}