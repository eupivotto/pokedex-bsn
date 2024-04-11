import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { addIcons } from 'ionicons';
import { optionsOutline } from 'ionicons/icons';
import { IonHeader, IonToolbar, IonImg, IonButtons, IonButton, IonIcon, IonCardSubtitle, IonSearchbar, IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  styleUrls: ['./header.component.scss'],
  imports: [IonContent, IonSearchbar, IonCardSubtitle, IonIcon, IonButton, IonButtons, IonToolbar, IonHeader, IonImg]
})
export class HeaderComponent  implements OnInit {




  constructor() {
    addIcons({ optionsOutline });
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {

  }

  


}
