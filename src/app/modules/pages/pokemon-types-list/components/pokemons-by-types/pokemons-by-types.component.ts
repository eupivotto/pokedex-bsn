interface PokemonResponse {
  pokemon: Pokemon[];
}

interface Pokemon {
  name: string;

  url: string;
}

import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import {
  IonItem,
  IonLabel,
  IonList,
  IonContent,
  IonRow,
  IonCol,
  IonGrid,
  IonButton,
  IonIcon,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonCardHeader,
  IonCardContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,


} from '@ionic/angular/standalone';
import { ModalController } from '@ionic/angular';
import { TypeColorsService } from 'src/app/core/services/type-colors.service';
import { ModalDetailsComponent } from '../../../pokemon-details/components/modal-details/modal-details.component';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { FavoriteService } from 'src/app/core/services/favorite.service';

@Component({
  selector: 'app-pokemons-by-types',
  templateUrl: './pokemons-by-types.component.html',
  standalone: true,
  styleUrls: ['./pokemons-by-types.component.scss'],
  imports: [
    IonInfiniteScrollContent,
    IonInfiniteScroll,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCard,
    IonButtons,
    IonToolbar,
    IonTitle,
    IonHeader,
    IonIcon,
    IonButton,
    IonGrid,
    IonCol,
    IonRow,
    IonContent,
    IonList,
    IonLabel,
    IonItem,
    CommonModule,
    NgFor,


  ],
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
    public favoriteService: FavoriteService,

  ) {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
    console.log('Tipo selecionado POKE  MODAL:', this.type);
    console.log('Tipo selecionado pokedetail', this.pokemon);
    this.getListTypesPokemons();
  }

  //get data byt types pokemons
  getListTypesPokemons() {
    this.pokemonService.getPokemonList().subscribe((res) => {
      this.getListPokemons = res.results; // add set for resolve back search results
    });
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
