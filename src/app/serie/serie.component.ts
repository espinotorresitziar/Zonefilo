import { Component, OnInit } from '@angular/core';
import { SerieDetails} from '../interfaces/series';
import { SerieService } from '../services/serie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Location } from '@angular/common';
import { Cast } from '../interfaces/cast';


@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit{
  serie?: SerieDetails
  cast: Cast[] = []

  constructor(private serieService: SerieService, private activatedRoute: ActivatedRoute, private router: Router, 
    private config: NgbRatingConfig, private location: Location) {

      config.max= 10
      config.readonly = true
      
    }

  ngOnInit(): void {
    
    const {id} = this.activatedRoute.snapshot.params

    this.serieService.getDetalles(id).subscribe(serie=>{
      
      if (!serie) {
        this.router.navigateByUrl('/')
        return
      }
      this.serie= serie
    })

    this.serieService.getCast(id).subscribe(cast=>{
      
      this.cast= cast
      //console.log(this.cast)

    })

  }

  atras() {
    this.location.back();
  }
}
