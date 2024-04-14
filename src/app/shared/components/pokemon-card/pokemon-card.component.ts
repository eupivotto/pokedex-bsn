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
import { ModalDetailsComponent } from 'src/app/modules/pages/pokemon-details/components/modal-details/modal-details.component';
import { ModalController, IonicModule, ToastController } from '@ionic/angular';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { CommonModule } from '@angular/common';
import { IPokemon, IPokemonList } from '../../../models/pokemon.models';
import { RouterLink } from '@angular/router';
import { SearchPokemonComponent } from '../search-pokemon/search-pokemon.component';
import { TypeColorsService } from 'src/app/core/services/type-colors.service';
import { FavoriteService } from 'src/app/core/services/favorite.service';


@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  standalone: true,
  styleUrls: ['./pokemon-card.component.scss'],
  imports: [ IonicModule, CommonModule, RouterLink, SearchPokemonComponent ],
})
export class PokemonCardComponent implements OnInit {

  private setListPokemons: any;
  @Input() getListPokemons : any;
  
  @Input() modal: any;
  @Input() pokemon: IPokemon | any;
  @Output() pokemonFavorited = new EventEmitter<any>();
  favorited: boolean = false;

  constructor(
    private modalController: ModalController,
    private pokemonService: PokemonService,
    public typeColorsService: TypeColorsService,
    public favoriteService: FavoriteService,
    private toastController: ToastController
  ) {
    addIcons({ addCircle, heart, heartOutline });
  }

  ngOnInit(): void {
    this.getAllPokemons();
    this.pokemonService.getPokemonByType(this.pokemon);

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
    this.pokemonService.getPokemonList().subscribe((res) => {
      this.setListPokemons = res.results; // add set to resolve back search results
      this.getListPokemons = this.setListPokemons;
      console.log(this.setListPokemons);
    });
  }

  //change type color pokemon style
  getTypeColor(type: string): string {
    return this.typeColorsService.getColorByType(type);
  }

  //Change type color background style
  getPokemonCardBackgroundColor(pokemon: any): string {
    return this.typeColorsService.getPokemonCardBackgroundColor(pokemon);
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
    this.favoriteService.addPokemon(pokemon);
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
      cssClass: 'custom-toast'
    });

    await toast.present();
  }
}


