import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: any;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.pokemonService.getAllPokemon()
    .subscribe(res => {
      this.pokemons = res
    });
  }

  remove(id){
    this.pokemonService.deletePokemon(id)
    .subscribe(() => {
      this.getAll();
    })
  }

}
