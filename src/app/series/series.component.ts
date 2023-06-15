import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Result } from '../interfaces/series';
import { SerieService } from '../services/serie.service';
import { Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  @Input() serie?:Result[];

  tendencia: Result[]=[];


  constructor(private serieService: SerieService, private router: Router, config: NgbRatingConfig) {
    config.max = 10;
    config.readonly = true;
   }

   @HostListener('window:scroll',['$event'])
  onScroll() {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop)*1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if (pos > max) {
      this.serieService.getSeries().subscribe(tendencias=>{
        this.tendencia.push(...tendencias)
      })
    }
  }

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
