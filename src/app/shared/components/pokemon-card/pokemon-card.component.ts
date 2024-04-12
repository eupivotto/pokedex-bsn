/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import {
  IonContent,
  IonImg,
  IonCol,
  IonToolbar,
  IonButton,
  IonIcon,
  IonRow,
  IonCard,
  IonGrid,
  IonSearchbar,
  IonCardSubtitle,
  IonModal,
} from '@ionic/angular/standalone';
import { addCircle, heart, heartOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { ModalDetailsComponent } from 'src/app/modules/pages/pokemon-details/components/modal-details/modal-details.component';
import { ModalController } from '@ionic/angular';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { TypeColorsService } from 'src/app/core/services/type-colors.service';
import { CommonModule } from '@angular/common';
import { Pokemon, PokemonList } from '../../../models/pokemon.models';
import { RouterLink } from '@angular/router';
import { SearchPokemonComponent } from '../search-pokemon/search-pokemon.component';
import { FavoriteService } from 'src/app/core/services/favorite.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  standalone: true,
  styleUrls: ['./pokemon-card.component.scss'],
  imports: [
    IonGrid,
    IonCard,
    IonRow,
    IonIcon,
    IonSearchbar,
    IonCardSubtitle,
    IonCol,
    IonButton,
    IonContent,
    IonToolbar,
    IonImg,
    CommonModule,
    RouterLink,
    SearchPokemonComponent,
  ],
})
export class PokemonCardComponent implements OnInit {
  public getListPokemons: any;
  private setListPokemons: any;

  pokemonList: PokemonList | undefined;
  @Input() modal: IonModal | any;
  @Input() pokemon: any;
  @Output() pokemonFavorited = new EventEmitter<any>();
  favorited: boolean = false;

  constructor(
    private modalController: ModalController,
    private pokemonService: PokemonService,
    public typeColorsService: TypeColorsService,
    private favoriteService: FavoriteService
  ) {
    addIcons({ addCircle, heart, heartOutline });
  }

  ngOnInit(): void {
    this.getAllPokemons();
  }

  // funcotion open and close modal
  async openModal(pokemon: any) {
    const modal = await this.modalController.create({
      component: ModalDetailsComponent,
      componentProps: { pokemon },
    });
    await modal.present();
  }

  closeModal() {
    this.modalController.dismiss();
  }

  getAllPokemons() {
    this.pokemonService.getPokemonList().subscribe((res) => {
      this.setListPokemons = res.results; // add set for resolve back search results
      this.getListPokemons = this.setListPokemons;
    });
  }

  getTypeColor(type: string): string {
    return this.typeColorsService.getColorByType(type);
  }

  getPokemonCardBackgroundColor(pokemon: any): string {
    return this.typeColorsService.getPokemonCardBackgroundColor(pokemon);
  }

  getSearch(value: any) {
    const filter = this.setListPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.getListPokemons = filter;
  }

  favoritePokemon(pokemon: any) {
    this.favoriteService.addPokemon(pokemon);
    this.pokemonFavorited.emit(pokemon);
  }

  toggleFavorite() {
    this.favorited = !this.favorited;
  }
}
