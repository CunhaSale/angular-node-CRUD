import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  pokemonId;
  pokemon;

  constructor(private route: ActivatedRoute,
              private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonId = this.route.snapshot.params.id;
    this.getPokemon();
  }

  getPokemon(){
    this.pokemonService.getOneById(this.pokemonId)
    .subscribe(res => {
      this.pokemon = res;
    });
  }

}
