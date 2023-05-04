import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/peliculas';


@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit, AfterViewInit{

  @Input() peliculas?: Pelicula[]
  
  pelicula: Pelicula[]=[]

  constructor() {}

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    
  }
}
