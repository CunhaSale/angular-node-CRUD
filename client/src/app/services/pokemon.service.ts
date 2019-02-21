import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private urlEncoded = `${encodeURI(environment.API_URL)}`;

  constructor(private http: HttpClient) { }

  getAllPokemon(){
    return this.http.get(`${this.urlEncoded}/pokemons`, httpOptions)
  }

  getOneById(id){
    return this.http.get(`${this.urlEncoded}/pokemons/${id}`, httpOptions)
  }

  createNewPokemon(body){
    return this.http.post(`${this.urlEncoded}/pokemons`, body, httpOptions)
  }

  deletePokemon(id){
    return this.http.delete(`${this.urlEncoded}/pokemons/${id}`, httpOptions)
  }
}
