import { Component, Input, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/interfaces/peliculas';
import Swiper from 'swiper';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit, AfterViewInit{
@Input() peliculas?:Pelicula[]
mySwiper?: Swiper
pelicula: Pelicula[]=[]

  constructor( private router: Router) {}

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper', {
      loop:true
    })
  }

  ngOnInit(): void {
    console.log(this.peliculas)
 }

 onSlidePrev(){

  this.mySwiper?.slidePrev();

}


onSlideNext(){

  this.mySwiper?.slideNext();

}

  onMovieClick(pelicula:Pelicula){

    this.router.navigate(['/pelicula', pelicula.id])

  }
  
}
