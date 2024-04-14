import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {
  IPokemonList,
  IPokemonTypeResponse,
} from '../../models/pokemon.models';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = environment.apiUrl;
  private apiType = environment.apiType;

  constructor(private http: HttpClient) {}





  //listing pokemons by type using name and url
  getPokemonList(): Observable<IPokemonList> {
    const url = `${this.apiUrl}/pokemon/?limit=25`;
    return this.http.get<IPokemonList>(url).pipe(
      tap((res) => res),
      tap((res) => {
        res.results.map((resPokemons: any) => {
          this.http
            .get<IPokemonList>(resPokemons.url)
            .pipe(map((res) => res))
            .subscribe((res) => (resPokemons.status = res));
        });
      })
    );
  }

  getPokemonListByTypes(): Observable<IPokemonList> {
    const url = `${this.apiType}?limit=19`;
    return this.http.get<IPokemonList>(url).pipe(
      tap((res) => res),
      tap((res) => {
        res.results.map((resPokemons: any) => {
          this.getPokemonDetails(resPokemons.url).subscribe((details) => {
            resPokemons.status = details;
          });
        });
      })
    );
  }

  getPokemonDetails(url: string): Observable<any> {
    return this.http.get<any>(url);
  }



  //listing pokemons by type using name and url
  getPokemonByType( typeName: string): Observable<{ name: string; url: string }[]> {
    const url = `${this.apiType}${typeName}`;
    return this.http.get<IPokemonTypeResponse>(url).pipe(
     map((response) =>
       response.pokemon.map((pokemon) => ({
         name: pokemon.pokemon.name,
         url: pokemon.pokemon.url,
       }))
     )
   );
 }
}
