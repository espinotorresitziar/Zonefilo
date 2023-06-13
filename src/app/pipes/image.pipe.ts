import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(image: string): string {
    
    //https://image.tmdb.org/t/p/w500/{{ movie.poster_path }}

    if (image) {
      return `https://image.tmdb.org/t/p/w500${image}`
    }else{

      return './assets/no-image.jpg'

    }
 
  }

}