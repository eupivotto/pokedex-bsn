import { Component, Input, OnInit } from '@angular/core';
import { addCircle, heart, trash } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { CommonModule } from '@angular/common';
import { ModalController, IonicModule } from '@ionic/angular';
import { FavoriteService } from 'src/app/core/services/favorite.service';
import { IPokemon } from 'src/app/models/pokemon.models';
import { ModalDetailsComponent } from 'src/app/modules/pages/pokemon-details/components/modal-details/modal-details.component';
@Component({
  selector: 'app-card-favorite',
  templateUrl: './card-favorite.component.html',
  standalone: true,
  styleUrls: ['./card-favorite.component.scss'],
  imports: [CommonModule, IonicModule],
})
export class CardFavoriteComponent implements OnInit {
  favoritePokemons: any[] = [];
  public getListPokemons: IPokemon | any;
  @Input() pokemon: IPokemon | any;

  constructor(
    public favoriteService: FavoriteService,
    private modalController: ModalController
  ) {
    addIcons({ heart, addCircle, trash });
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
    this.getFromFavorites();
  }

  //funcion to add favorite pokemon on local storage
  addPokemonToFavorites(pokemon: any) {
    this.favoritePokemons.push(pokemon);
    localStorage.setItem(
      'favoritePokemons',
      JSON.stringify(this.favoritePokemons)
    );
  }

  //get from favotires
  getFromFavorites() {
    this.favoritePokemons = this.favoriteService.getFavorites();
  }

  //remove favorite pokemon
  removeFromFavorites(pokemon: any) {
    this.favoriteService.removePokemon(pokemon);
  }

  ///send data pokemon and open modal
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
}
