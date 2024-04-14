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
  IonAvatar,
} from '@ionic/angular/standalone';
import { ModalController } from '@ionic/angular';
import { TypeColorsService } from 'src/app/core/services/type-colors.service';

import { ModalDetailsComponent } from '../../../pokemon-details/components/modal-details/modal-details.component';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemons-by-types',
  templateUrl: './pokemons-by-types.component.html',
  standalone: true,
  styleUrls: ['./pokemons-by-types.component.scss'],
  imports: [
    IonAvatar,
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
    private http: HttpClient
  ) {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
    console.log('Tipo selecionado POKE  MODAL:', this.type);
    this.getAllPokemons();
  }

  getAllPokemons() {
    this.pokemonService.getPokemonList().subscribe((res) => {
      this.getListPokemons = res.results; // add set for resolve back search results
    });
  }

  async openModal(pokemon: any) {
    const modal = await this.ModalController.create({
      component: ModalDetailsComponent,
      componentProps: {
        pokemon: pokemon,
      },
    });
    return await modal.present();
  }
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  setClose() {
    this.ModalController.dismiss();
  }

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

  onIonInfinite(ev: any) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
}
