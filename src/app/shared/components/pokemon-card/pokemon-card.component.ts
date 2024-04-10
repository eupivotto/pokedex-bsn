/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { IonContent, IonImg, IonCol, IonToolbar, IonButton, IonIcon, IonRow, IonCard, IonGrid, IonSearchbar, IonCardSubtitle, IonModal } from "@ionic/angular/standalone";
import { addCircle, heart } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { ModalDetailsComponent } from 'src/app/modules/pages/pokemon-details/components/modal-details/modal-details.component';
import { ModalController } from '@ionic/angular';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { TypeColorsService } from 'src/app/core/services/type-colors.service';
import { CommonModule } from '@angular/common';
import { Pokemon, PokemonList } from '../../../models/pokemon.models'


@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  standalone: true,
  styleUrls: ['./pokemon-card.component.scss'],
  imports: [IonGrid,
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
            CommonModule

          ]
})

export class PokemonCardComponent  implements OnInit {

getPokemonNumber(arg0: string) {
throw new Error('Method not implemented.');
}

  public getListPokemons: any;
  pokemonList: PokemonList | undefined;
  @Input() modal: IonModal | any;




  constructor(private modalController: ModalController,
              private pokemonService: PokemonService,
              private typeColorsService: TypeColorsService) {

    addIcons({ addCircle, heart });
  }

  ngOnInit(): void {
   this.pokemonService.getPokemonList().subscribe(
    res => {
      this.getListPokemons = res.results;
      console.log(this.getListPokemons);
    }
   )

  }


// funcotion open and close modal
  async openModal() {
    const modal = await this.modalController.create({
      component: ModalDetailsComponent,
      componentProps: {}
    });
    await modal.present();
  }


  closeModal() {
    this.modalController.dismiss();
  }


  getTypeColor(type: string): string {
    return this.typeColorsService.getColorByType(type);

  }

  getPokemonCardBackgroundColor(pokemon: any): string {
    return pokemon.status?.types && pokemon.status?.types[0]?.type ? this.getTypeColor(pokemon.status?.types[0].type.name) : '';

  }

}




