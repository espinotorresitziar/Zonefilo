import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Cast } from 'src/app/interfaces/cast';
import Swiper from 'swiper';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css']
})
export class CastComponent implements OnInit, AfterViewInit{

  @Input() cast?: Cast[]

  constructor() { }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper', {
      slidesPerView: 5.3, 
      freeMode: true,
      spaceBetween: 15
    })
  }

  ngOnInit(): void {
    console.log(this.cast)
  }
}
