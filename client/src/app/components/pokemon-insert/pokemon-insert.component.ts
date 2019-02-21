import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-insert',
  templateUrl: './pokemon-insert.component.html',
  styleUrls: ['./pokemon-insert.component.css']
})
export class PokemonInsertComponent implements OnInit {
  new_pokemon: FormGroup;
  name: AbstractControl;
  type1: AbstractControl;
  type2: AbstractControl;
  ability1: AbstractControl;
  ability2: AbstractControl;
  ability3: AbstractControl;

  pokemon;

  constructor(private formBuilder: FormBuilder,
              private pokemonService: PokemonService,
              private router: Router) {
    this.new_pokemon = this.formBuilder.group({
      name: ['', Validators.required],
      type1: [''],
      type2: [''],
      ability1: [''],
      ability2: [''],
      ability3: [''],
    });

    this.name = this.new_pokemon.controls['name'];
    this.type1 = this.new_pokemon.controls['type1'];
    this.type2 = this.new_pokemon.controls['type2'];
    this.ability1 = this.new_pokemon.controls['ability1'];
    this.ability2 = this.new_pokemon.controls['ability2'];
    this.ability3 = this.new_pokemon.controls['ability3'];
   }

  ngOnInit() {
  }

  save(){
    let types = [];
    let abilities = [];

    if(this.type1){types.push(this.type1.value)}
    if(this.type2){types.push(this.type2.value)}

    if(this.ability1){abilities.push(this.ability1.value)}
    if(this.ability2){abilities.push(this.ability2.value)}
    if(this.ability3){abilities.push(this.ability3.value)}

    this.pokemon = {
      name: this.name.value,
      types: types,
      abilities: abilities,
    }

    this.pokemonService.createNewPokemon(this.pokemon)
    .subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }

}
