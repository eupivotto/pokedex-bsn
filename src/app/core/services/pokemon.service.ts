import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, map, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
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
      }),
       catchError((error) => {
        console.error(`Erro ao obter lista de Pokemons: ${error}`);
        return throwError(
          'Erro ao obter lista de Pokemons. Por favor, tente novamente.'
        );
      })
    );
  }

  //function usage of more types
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
      }),
      catchError((error) => {
        console.error(`Erro ao obter lista de Pokemons: ${error}`);
        return throwError(
          'Erro ao obter lista de Pokemons. Por favor, tente novamente.'
        );
      })

    );
  }

  getPokemonDetails(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  //listing pokemons by type using name and url
  getPokemonByType(
    typeName: string
  ): Observable<{ name: string; url: string }[]> {
    const url = `${this.apiType}${typeName}`;
    return this.http.get<IPokemonTypeResponse>(url).pipe(
      map((response) =>
        response.pokemon.map((pokemon) => ({
          name: pokemon.pokemon.name,
          url: pokemon.pokemon.url,
        }))
      )
    );
    catchError(this.handleError)
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      //error side of client.
      console.error('Ocorreu um erro:', error.error.message);
    } else {
      // erro result back end.
      // body request error,
      console.error(
        `Código de erro retornado pelo servidor ${error.status}, ` +
        `mensagem de erro: ${error.error}`
      );
    }
    // return a obervable
    return throwError('Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.');
  }
}

