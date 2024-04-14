export interface PokemonList {
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
export interface PokemonResponse {
  name: string;
  url: string;
}

export interface PokemonTypeResponse {
  name: string;
}
export interface PokemonTypeResponse {
  // ... outras propriedades da resposta
  pokemon: {
    pokemon: {
      name: string;
      url: string;
    };
  }[];
}
export interface Pokemon {
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



interface PokemonDetail {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  order: number;
  types: {
    slot: number;
    type: {
      name: string;
    };
  }[];
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
}


interface IpokemonBaseStats {
  name: string;
  base_stats: number;
}
