import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../services/pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  constructor(private peliculaService: PeliculaService) { }

  ngOnInit(): void {
  }

  /*getPeliculas(search: string) {
    this.peliculaService.getPeliculas(search).subscribe(data => {
      console.log(data)
    })
  }*/
}
