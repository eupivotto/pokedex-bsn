export interface IPokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];

}

export interface PokemonListItem {
  name: string;
  url: string;
  type: [];



}

export interface IPokemonTypeResponse {
  // ... outras propriedades da resposta
  pokemon: {
    pokemon: {
      name: string;
      url: string;
    };
  }[];
}
export interface IPokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  order: number;
  types: string[];
  type: string;
  photo: string;
  abilities: {
    ability: any;
    is_hidden: boolean;
    slot: number;
  }[];


}



