import { Component, OnInit } from '@angular/core';
import { IonContent, IonImg, IonCol, IonToolbar, IonButton, IonIcon, IonRow, IonCard, IonGrid, IonSearchbar, IonCardSubtitle } from "@ionic/angular/standalone";
import { addCircle } from 'ionicons/icons';
import { addIcons } from 'ionicons';
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
            IonImg]
})
export class PokemonCardComponent  implements OnInit {

  constructor() {
    addIcons({ addCircle });
  }

  ngOnInit() {}

}
