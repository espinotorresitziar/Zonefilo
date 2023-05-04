import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  @Input('pelicula') pelicula: any

  constructor() { }

  ngOnInit(): void {
    console.log(this.pelicula)
  }

}
