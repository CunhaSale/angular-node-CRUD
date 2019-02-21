import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonInsertComponent } from './components/pokemon-insert/pokemon-insert.component';

const routes: Routes = [
  { path: 'pokemon-insert', component: PokemonInsertComponent},
  { path: '**', redirectTo: '/'},
  { path: '', component: PokemonListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
