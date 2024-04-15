interface PokemonResponse {
  pokemon: Pokemon[];
}

interface Pokemon {
  name: string;

  url: string;
}

import { Component, Input, OnInit } from '@angular/core';
import { closeCircle } from 'ionicons/icons';
import { CommonModule, NgFor } from '@angular/common';

import { ModalController, IonicModule, InfiniteScrollCustomEvent,
} from '@ionic/angular';

import { ModalDetailsComponent } from '../../../pokemon-details/components/modal-details/modal-details.component';

import { addIcons } from 'ionicons';
import { PokemonService } from 'src/app/shared/services/pokemon.service';
import { TypeColorsService } from 'src/app/shared/services/type-colors.service';
import { FavoriteService } from 'src/app/shared/services/favorite.service';

@Component({
  selector: 'app-pokemons-by-types',
  templateUrl: './pokemons-by-types.component.html',
  standalone: true,
  styleUrls: ['./pokemons-by-types.component.scss'],
  imports: [IonicModule, CommonModule, NgFor],
})
export class PokemonsByTypesComponent implements OnInit {
  isModalOpen = false;
  @Input() type: any;
  @Input() pokemon: any;
  @Input() getListPokemons: any;

  constructor(
    private pokemonService: PokemonService,
    private ModalController: ModalController,
    public typeColorsService: TypeColorsService,
    public favoriteService: FavoriteService
  ) {
    addIcons({ closeCircle });
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
    console.log('Tipo selecionado POKE  MODAL:', this.type);
    this.getListTypesPokemons();
  }

  //get data byt types pokemons
  getListTypesPokemons() {
    this.pokemonService.getPokemonList().subscribe((res: any) => {
      this.getListPokemons = res.results.map((type: any) => {
        const id = this.getIdFromUrl(type.url);
        const Height = type.Height;
        const base = type.base_experience;
        return { id, name: type.name, Height, base};
      });
      console.log('lista da página categoría', this.getListPokemons);
    });
  }

  getIdFromUrl(url: string): number {
    const urlParts = url.split('/');
    return parseInt(urlParts[urlParts.length - 2]);
  }

  //function Open Modal and send data on modal component
  async openModal(pokemon: any) {
    const modal = await this.ModalController.create({
      component: ModalDetailsComponent,
      componentProps: {
        pokemon: pokemon,
      },
    });
    return await modal.present();
  }

  //set Open Modal
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  //set close modal
  setClose() {
    this.ModalController.dismiss();
  }

  //get type color to change on by type
  getTypeColor(type: string): string {
    return this.typeColorsService.getColorByType(type);
  }

  getPokemonCardBackgroundColor(pokemon: any): string {
    return this.typeColorsService.getPokemonCardBackgroundColor(pokemon);
  }

  private generateItems() {
    const count = this.type.length + 1;
    for (let i = 0; i < 50; i++) {
      this.type.push(`Item ${count + i}`);
    }
  }

  // Infine scroll function implements
  onIonInfinite(ev: any) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
}
