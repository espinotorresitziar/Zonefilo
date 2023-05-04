import { Component, OnInit } from '@angular/core';
import { PeliculaService } from './services/pelicula.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Zonefilo';

  /*constructor(private peliculaService: PeliculaService) {
    this.peliculaService.getPeliculas().subscribe(res=>{
      console.log(res)
    })
   }
*/

  //peliculas: any[] = [];

    
  
    /*getPeliculas(search: string) {
      this.peliculaService.getPeliculas(search).subscribe(data => {
        this.peliculas = data.search
      })
    }
    */
   
}
