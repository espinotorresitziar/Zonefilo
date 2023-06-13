import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/peliculas';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estrenos',
  templateUrl: './estrenos.component.html',
  styleUrls: ['./estrenos.component.css']
})
export class EstrenosComponent implements OnInit{

  @Input() peliculas?:Pelicula[];
 
  constructor(config: NgbRatingConfig, private router: Router) {
    
    config.max = 10;
    config.readonly = true;
  }

  ngOnInit() {
    //console.log(this.peliculas)
  }

  onMovieClick(pelicula:Pelicula){


    this.router.navigate(["/pelicula", pelicula.id])
    

  }
}
