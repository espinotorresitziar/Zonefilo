import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { BuscarComponent } from './buscar/buscar.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { SeriesComponent } from './series/series.component';
import { SerieComponent } from './serie/serie.component';
import { BuscserieComponent } from './buscserie/buscserie.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'peliculas', component: PeliculasComponent},
  { path: 'buscar/:texto', component: BuscarComponent},
  { path: 'pelicula/:id', component: PeliculaComponent},
  { path: 'series', component: SeriesComponent},
  { path: 'serie/:id', component: SerieComponent},
  { path: 'buscSerie/:texto', component: BuscserieComponent},
  
  {path: '', pathMatch:'full', redirectTo: '/inicio'},
  {path: '**', pathMatch:'full', redirectTo: '/inicio'}
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
