import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { YouTubePlayerModule } from '@angular/youtube-player'


//Modulos
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

//Componentes
import { AppComponent } from './app.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { BuscarComponent } from './buscar/buscar.component';
import { InicioComponent } from './inicio/inicio.component';
import { SeriesComponent } from './series/series.component';
import { EstrenosComponent } from './shared/estrenos/estrenos.component';
import { PipesModule } from './pipes/pipes.module';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { SerieComponent } from './serie/serie.component';
import { BuscserieComponent } from './buscserie/buscserie.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
    declarations: [
        AppComponent,
        PeliculasComponent,
        BuscarComponent,
        InicioComponent,
        SeriesComponent,
        EstrenosComponent,
        PeliculaComponent,
        SerieComponent,
        BuscserieComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        RouterModule,
        SharedModule,
        NgbModule,
        PipesModule,
        NgbRatingModule,
        BrowserAnimationsModule,
        YouTubePlayerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
