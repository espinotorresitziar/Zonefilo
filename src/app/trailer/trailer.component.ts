import { Component, OnInit, Input } from '@angular/core';
import { Resulta } from '../interfaces/trailer';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.css']
})
export class TrailerComponent implements OnInit{

  @Input() trailer?: Resulta[]

  constructor() {}

  ngOnInit(): void {
    const tag = document.createElement('script')
    tag.src = "https://www.youtube.com/iframe_api"
    document.body.appendChild(tag)
  }

}
