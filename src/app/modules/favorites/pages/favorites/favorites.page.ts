import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../../../shared/components/header/header.component";
import { CardFavoriteComponent } from 'src/app/shared/components/card-favorite/card-favorite.component';
import { PokemonCardComponent } from "../../../../shared/components/pokemon-card/pokemon-card.component";

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.page.html',
    styleUrls: ['./favorites.page.scss'],
    standalone: true,
    imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, CardFavoriteComponent, PokemonCardComponent]
})
export class FavoritesPage implements OnInit {
favoritePokemon: any

  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }

}
