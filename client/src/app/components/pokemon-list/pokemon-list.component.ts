import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons = [
  {
    "name": "bulbasaur",
    "order": 1,
    "types": ["grass", "poison"],
    "abilities": ["overgrow"]
  },
  {
    "name": "ivysaur",
    "order": 2,
    "types": ["grass", "poison"],
    "abilities": ["overgrow"]
  },
  {
    "name": "Venusaur",
    "order": 3,
    "types": ["grass", "poison"],
    "abilities": ["overgrow"]
  }];

  constructor() { }

  ngOnInit() {
  }

}
