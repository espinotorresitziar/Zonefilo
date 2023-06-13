import { Component, OnInit, Input } from '@angular/core';
import { Result } from '../interfaces/series';
import { SerieService } from '../services/serie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  @Input() serie?:Result[];

  tendencia: Result[]=[];

  constructor(private serieService: SerieService, private router: Router) { }

  ngOnInit(): void {
    this.serieService.getSeries().subscribe(tendencias=>{
      this.tendencia = tendencias
      console.log(tendencias)
    })
  }

  onMovieClick(tendencia:Result){


    this.router.navigate(["/serie", tendencia.id])
    

  }
}
