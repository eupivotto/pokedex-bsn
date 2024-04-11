import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map, of } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { PokemonList, Pokemon} from '../../models/pokemon.models';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {

  private apiUrl = environment.apiUrl;
  private apiType = environment.apiType;






  constructor(private http: HttpClient) {}


  getPokemonTypes(): Observable<any> {
    const urlTypes = `${this.apiType}`;
    return this.http.get<any>(urlTypes);
  }

 

  getPokemonList(): Observable<PokemonList> {
    const url = `${this.apiUrl}/pokemon/?limit=25`;
    return this.http.get<PokemonList>(url).pipe(
      tap(res => res),
      tap( res => {
        res.results.map((resPokemons: any) => {
          this.http.get<PokemonList>(resPokemons.url).pipe(
            map(res => res)
          ).subscribe( res => resPokemons.status = res)
        })
      })

    );
  }





  convertPokeApiDetailToPokemon(pokeDetail: any): Observable<Pokemon> {
    return of(this.convertToPokemon(pokeDetail));
  }

  private convertToPokemon(pokeDetail: any): Pokemon {
    const pokemon: Pokemon = {
      id: pokeDetail.id,
      name: pokeDetail.name,
      base_experience: pokeDetail.base_experience,
      height: pokeDetail.height,
      order: pokeDetail.order,
      types: pokeDetail.types ? pokeDetail.types.map((typeSlot: any) => typeSlot.type.name) : [],
      type: pokeDetail.types ? pokeDetail.types[0].type.name : '',
      photo: pokeDetail.sprites ? pokeDetail.sprites.other.dream_world.front_default : '',
      abilities: pokeDetail.abilities ? pokeDetail.abilities.map((abilitySlot: any) => ({
        ability: abilitySlot.ability,
        is_hidden: abilitySlot.is_hidden,
        slot: abilitySlot.slot
      })) : [],
    };

    return pokemon;
  }





  getPokemonDetails(pokemonId: number): Observable<Pokemon> {
    const url = `${this.apiUrl}/${pokemonId}`;
    return this.http.get(url).pipe(
      map((response: any) => this.convertToPokemon(response))
    );

  }


}

