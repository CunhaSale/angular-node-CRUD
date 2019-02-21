import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonInsertComponent } from './components/pokemon-insert/pokemon-insert.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  { path: 'pokemon-insert', component: PokemonInsertComponent},
  { path: 'pokemon-detail/:id', component: PokemonDetailComponent},
  { path: '**', redirectTo: '/'},
  { path: '', component: PokemonListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
