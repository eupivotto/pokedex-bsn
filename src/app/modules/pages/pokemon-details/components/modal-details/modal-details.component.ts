import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {
  IonHeader,
  IonContent,
  IonButton,
  IonTitle,
  IonButtons,
  IonToolbar,
  IonModal,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  standalone: true,
  styleUrls: ['./modal-details.component.scss'],
  imports: [
    IonHeader,
    IonContent,
    IonButton,
    IonTitle,
    IonButtons,
    IonToolbar,
    IonModal,
    CommonModule,
  ],
})
export class ModalDetailsComponent implements OnInit {
  isModalOpen = false;

  constructor(private modalController: ModalController) {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  setClose() {
    this.modalController.dismiss();
  }
}
