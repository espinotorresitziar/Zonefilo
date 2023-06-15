import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../services/pelicula.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculaDetails, Result, Video } from '../interfaces/pelicula';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Cast } from '../interfaces/cast';
import { Location } from '@angular/common';
import { Resulta } from '../interfaces/trailer';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit{

  pelicula?: PeliculaDetails
  cast: Cast[] = []
  key: Resulta[] = []

  constructor(private peliculaService: PeliculaService, private activatedRoute: ActivatedRoute, private router: Router, 
    private config: NgbRatingConfig, private location: Location) {

      config.max= 10
      config.readonly = true
      
    }

  ngOnInit(): void {
    
    const {id} = this.activatedRoute.snapshot.params

    this.peliculaService.getDetalles(id).subscribe(pelicula=>{
      //console.log(pelicula)
      if (!pelicula) {
        this.router.navigateByUrl('/')
        return
      }
      this.pelicula= pelicula
    })

    this.peliculaService.getCast(id).subscribe(cast=>{
      
      this.cast= cast
      //console.log(this.cast)

    })

    this.peliculaService.getTrailer(id).subscribe(key=>{
      this.key=key
    })

  }

  atras() {
    this.location.back();
  }
}
