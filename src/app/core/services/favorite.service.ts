import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favoritePokemons: any[] = [];

  constructor() {
    this.initializeFavorites();
   }

   //init favorite pokemon function on locarl storage
   private initializeFavorites() {
    const storedFavorites = localStorage.getItem('favoritePokemons');
    if (storedFavorites) {
      this.favoritePokemons = JSON.parse(storedFavorites);
    }
  }


  // Add favorites Pokemons
  addPokemon(pokemon: any) {
    this.favoritePokemons.push(pokemon);
    this.saveFavorites();
  }

  // Remove a Pokemon from the favorites
  removePokemon(pokemon: any) {
    if (pokemon) {
      const index = this.favoritePokemons.findIndex(p => p.id === pokemon.id);
      if (index !== -1) {
        this.favoritePokemons.splice(index, 1);
        this.saveFavorites();
      }
    }
  }

  // Get favorites for the favorites
  getFavorites(): any[] {
    return this.favoritePokemons;
  }

  // Save a favorites for the local storage
  private saveFavorites() {
    localStorage.setItem('favoritePokemons', JSON.stringify(this.favoritePokemons));
  }

}
