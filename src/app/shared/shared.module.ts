import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { RouterModule } from '@angular/router';
import { EstrenosComponent } from './estrenos/estrenos.component';
import { PipesModule } from '../pipes/pipes.module';
import { NgbPaginationModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CastComponent } from './cast/cast.component';



@NgModule({
  declarations: [
    SlideShowComponent,
    CastComponent
  ],
  exports: [
    SlideShowComponent,
    CastComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    NgbRatingModule,
    NgbPaginationModule,
    ReactiveFormsModule,
    
  ]
})
export class SharedModule { }
