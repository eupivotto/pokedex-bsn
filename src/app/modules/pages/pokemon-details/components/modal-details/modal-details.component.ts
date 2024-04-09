import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { closeCircle } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import {
  IonHeader,
  IonContent,
  IonButton,
  IonTitle,
  IonButtons,
  IonToolbar,
  IonModal,
  IonRow,
  IonCol,
  IonGrid,
  IonProgressBar,
  IonList,
  IonItem,
  IonLabel,
  IonChip,
  IonIcon,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  standalone: true,
  styleUrls: ['./modal-details.component.scss'],
  imports: [
    IonIcon,
    IonChip,
    IonLabel,
    IonItem,
    IonList,
    IonProgressBar,
    IonGrid,
    IonCol,
    IonRow,
    IonHeader,
    IonContent,
    IonButton,
    IonButtons,
    IonToolbar,
    IonModal,
    IonTitle,
    CommonModule,
  ],
})
export class ModalDetailsComponent implements OnInit {
  isModalOpen = false;

  constructor(private modalController: ModalController) {
    addIcons({ closeCircle });
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  setClose() {
    this.modalController.dismiss();
  }
}
