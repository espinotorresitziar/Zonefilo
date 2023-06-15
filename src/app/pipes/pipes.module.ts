import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './image.pipe';
import { YoutubePipe } from './youtube.pipe';



@NgModule({
  declarations: [
    ImagePipe,
    YoutubePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [ImagePipe]
})
export class PipesModule { }
