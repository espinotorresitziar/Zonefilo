import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private API: string = 'https://apirest-zonefilo.herokuapp.com/'

  constructor( private httpClient: HttpClient) {

    
   }
}
