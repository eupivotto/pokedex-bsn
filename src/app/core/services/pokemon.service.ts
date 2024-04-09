import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon, PokemonList } from '../../models/pokemon.models';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<PokemonList> {
    const url = `${this.apiUrl}/pokemon`; // Endpoint para obter a lista de Pokémon
    return this.http.get<PokemonList>(url);
  }
  getPokemonDetails(id: number): Observable<Pokemon> {
      const url = `${this.apiUrl}/pokemon`;
      return this.http.get<Pokemon>(url);
  }

}



