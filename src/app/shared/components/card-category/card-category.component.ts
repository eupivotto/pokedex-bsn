import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardTitle, IonIcon, IonCardHeader, IonCardSubtitle, IonCardContent, IonRow, IonCol, IonGrid, IonTitle, IonButton } from "@ionic/angular/standalone";
import { addCircle } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-card-category',
  templateUrl: './card-category.component.html',
  standalone: true,
  styleUrls: ['./card-category.component.scss'],
  imports: [IonButton, IonTitle, IonGrid, IonCol, IonRow, IonIcon, IonCard,IonCardContent, IonCardSubtitle, IonCardHeader, IonCardTitle, IonCardSubtitle]
})
export class CardCategoryComponent  implements OnInit {

  constructor() {
    addIcons({addCircle})
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}

}
