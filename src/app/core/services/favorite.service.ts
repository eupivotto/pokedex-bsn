import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favoritePokemons: any[] = [];

  constructor() {
    this.initializeFavorites();
   }

   private initializeFavorites() {
    const storedFavorites = localStorage.getItem('favoritePokemons');
    if (storedFavorites) {
      this.favoritePokemons = JSON.parse(storedFavorites);
    }
  }


  // Adicionar um pokémon aos favoritos
  addPokemon(pokemon: any) {
    this.favoritePokemons.push(pokemon);
    this.saveFavorites();
  }

  // Remover um pokémon dos favoritos
  removePokemon(pokemon: any) {
    const index = this.favoritePokemons.findIndex(p => p.id === pokemon.id);
    if (index !== -1) {
      this.favoritePokemons.splice(index, 1);
      this.saveFavorites();
    }
  }

  // Recuperar todos os pokémons favoritos
  getFavorites(): any[] {
    return this.favoritePokemons;
  }

  // Salvar os favoritos no armazenamento local
  private saveFavorites() {
    localStorage.setItem('favoritePokemons', JSON.stringify(this.favoritePokemons));
  }

}
