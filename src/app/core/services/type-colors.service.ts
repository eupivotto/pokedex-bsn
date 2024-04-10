import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeColorsService {

  private typeToColor: { [type: string ]: string} =  {
    normal: 'var(--gradient-normal)',
    grass: 'var(--gradient-grass)',
    fire: 'var(--gradient-fire)',
    water: 'var(--gradient-water)',
    poison: 'var(--gradient-poison)',
    eletric: 'var(--gradient-eletric)',
    ground: 'var(--gradient-ground)',
    psychic: 'var(--gradient-psychic)',
    ice: 'var(--gradient-ice)',
    dragon: 'var(--gradient-dragon)',
    dark: 'var(--gradient-dark)',
    fairy: 'var(--gradient-fairy)',
    fighting: 'var(--gradient-fighting)',
    flying: 'var(--gradient-flying)',
    bug: 'var(--gradient-bug)',
    rock: 'var(--gradient-rock)',
    steel: 'var(--gradient-steel)',
    ghost: 'var(--gradient-ghost)'


  };

  constructor() { }

   getColorByType(type: string): string {
    return this.typeToColor[type];
   }

}
