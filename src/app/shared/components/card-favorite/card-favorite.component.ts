import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonRow, IonCol, IonGrid, IonIcon, IonButton } from "@ionic/angular/standalone";
import { addCircle, heart, trash } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { CommonModule } from '@angular/common';
import { FavoriteService } from 'src/app/core/services/favorite.service';
@Component({
  selector: 'app-card-favorite',
  templateUrl: './card-favorite.component.html',
  standalone: true,
  styleUrls: ['./card-favorite.component.scss'],
  imports: [IonCardContent,
            IonCardSubtitle,
            IonCardTitle,
            IonCardHeader,
            IonCard,
            IonRow,
            IonCol,
            IonGrid,
            IonIcon,
            IonButton,
            CommonModule ]
})
export class CardFavoriteComponent  implements OnInit {
  favoritePokemons: any[] = [];


  constructor(private favoriteService: FavoriteService) {
    addIcons({heart, addCircle, trash});
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
    this.favoritePokemons = this.favoriteService.getFavorites();
  }

  addPokemonToFavorites(pokemon: any) {
    this.favoritePokemons.push(pokemon);
    localStorage.setItem('favoritePokemons', JSON.stringify(this.favoritePokemons));
    console.log(this.favoritePokemons);
  }

  removeFromFavorites(pokemon: any) {
    this.favoriteService.removePokemon(pokemon);
  }

}
