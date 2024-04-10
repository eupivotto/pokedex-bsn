export interface PokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}

export interface PokemonListItem {
  name: string;
  url: string;
  id: number
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

export function createDefaultPokemon(): Pokemon {
  return {
    id: 0,
    name: '',
    base_experience: 0,
    height: 0,
    order: 0,
    types: [],
    type: '',
    photo: '',
    abilities: [],
  };
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
