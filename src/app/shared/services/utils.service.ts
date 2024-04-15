import { Injectable } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { TypeColorsService } from './type-colors.service';
import { FavoriteService } from './favorite.service';
import { ModalService } from './modal.service';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    public pokemonService: PokemonService,
    public typeColorsService: TypeColorsService,
    public favoriteService: FavoriteService,
    public modalService: ModalService,

    ) { }
}
