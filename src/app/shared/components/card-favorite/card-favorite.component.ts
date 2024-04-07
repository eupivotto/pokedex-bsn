import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonRow, IonCol, IonGrid, IonIcon, IonButton } from "@ionic/angular/standalone";
import { addCircle, heart } from 'ionicons/icons';
import { addIcons } from 'ionicons';
@Component({
  selector: 'app-card-favorite',
  templateUrl: './card-favorite.component.html',
  standalone: true,
  styleUrls: ['./card-favorite.component.scss'],
  imports: [IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonRow, IonCol, IonGrid, IonIcon, IonButton ]
})
export class CardFavoriteComponent  implements OnInit {

  constructor() {
    addIcons({heart, addCircle});
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}

}
