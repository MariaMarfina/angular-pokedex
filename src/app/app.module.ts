import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginationComponent } from './pagination/pagination.component';
import { NavComponent } from './nav/nav.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { PageStateMessageComponent } from './page-state-message/page-state-message.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    NavComponent,
    NotFoundPageComponent,
    PageStateMessageComponent,
    PokemonComponent,
    PokemonPageComponent,
    PokemonsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
