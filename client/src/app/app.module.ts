import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { AppRoutingModule } from './app.routing.module';
import { PokemonInsertComponent } from './components/pokemon-insert/pokemon-insert.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonInsertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
