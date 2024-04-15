/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';

import { addCircle, heart, heartOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { ModalController, IonicModule, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { IPokemon } from '../../models/pokemon.models';
import { RouterLink } from '@angular/router';
import { SearchPokemonComponent } from '../search-pokemon/search-pokemon.component';
import { ModalDetailsComponent } from 'src/app/modules/pokemon-details/components/modal-details/modal-details.component';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  standalone: true,
  styleUrls: ['./pokemon-card.component.scss'],
  imports: [IonicModule, CommonModule, RouterLink, SearchPokemonComponent],
})
export class PokemonCardComponent implements OnInit {
  private setListPokemons: any;
  @Input() getListPokemons: any;

  @Input() modal: any;
  @Input() pokemon: IPokemon | any;
  @Output() pokemonFavorited = new EventEmitter<any>();
  favorited: boolean = false;

  constructor(
    private modalController: ModalController,
    private toastController: ToastController,
    public utils: UtilsService

  ) {
    addIcons({ addCircle, heart, heartOutline });
  }

  ngOnInit(): void {
    this.getAllPokemons();
    this.utils.pokemonService.getPokemonByType(this.pokemon);
  }

  // function open and close modal
  async openModal(pokemon: any) {
    const modal = await this.modalController.create({
      component: ModalDetailsComponent,
      componentProps: { pokemon },
    });
    await modal.present();
  }

  //Close modal
  closeModal() {
    this.modalController.dismiss();
  }

  //get all pokemon list
  getAllPokemons() {
    this.utils.pokemonService.getPokemonList().subscribe((res: any) => {
      this.setListPokemons = res.results; // add set to resolve back search results
      this.getListPokemons = this.setListPokemons;
      console.log(this.setListPokemons);
    });
  }

  //change type color pokemon style
  getTypeColor(type: string): string {
    return this.utils.typeColorsService.getColorByType(type);
  }

  //Change type color background style
  getPokemonCardBackgroundColor(pokemon: any): string {
    return this.utils.typeColorsService.getPokemonCardBackgroundColor(pokemon);
  }

  //get pokemon search function
  getSearch(value: any) {
    const filter = this.setListPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.getListPokemons = filter;
  }

  //favorite pokemon function
  favoritePokemon(pokemon: any) {
    this.utils.favoriteService.addPokemon(pokemon);
    this.pokemonFavorited.emit(pokemon);
  }

  // Toggle function implements
  toggleFavorite() {
    this.favorited = !this.favorited;
  }

  //configure toast function
  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Pokemon Favoritado!',
      duration: 1500,
      position: position,
      cssClass: 'custom-toast',
    });

    await toast.present();
  }
}
