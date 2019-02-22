import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Subject, Observable } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap, take
} from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons$: Observable<any>;
  private searchTerms = new Subject<string>();

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.pokemons$ = this.pokemonService.getAllPokemon()
    .pipe(
      take(1)
    )
  }

  remove(id){
    this.pokemonService.deletePokemon(id)
    .subscribe(() => {
      this.getAll();
    })
  }

  // search(value){
  //   this.searchTerms.next(value)

  //   this.pokemons$ = this.searchTerms.pipe(
  //     // wait 300ms after each keystroke before considering the term
  //     debounceTime(300),

  //     // ignore new term if same as previous term
  //     distinctUntilChanged(),
      
  //     // switch to new search observable each time the term changes
  //     switchMap((value: string) => this.pokemonService.searchPokemon(value)),
  //   );
  // }

}
