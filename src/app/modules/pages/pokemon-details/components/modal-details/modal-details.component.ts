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
import { ActivatedRoute } from '@angular/router';
import { IPokemon } from 'src/app/models/pokemon.models';
import { TypeColorsService } from 'src/app/core/services/type-colors.service';

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
  @Input() pokemon: IPokemon | any;
  @Input() statusData: any;

  constructor(private modalController: ModalController,
              private activeRoute: ActivatedRoute,
              public typeColorsService: TypeColorsService) {
    addIcons({ closeCircle });
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {

  }


  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  setClose() {
    this.modalController.dismiss();
  }

  getTypeColor(type: string): string {
    return this.typeColorsService.getColorByType(type);

  }

  getPokemonCardBackgroundColor(pokemon: any): string {
    return this.typeColorsService.getPokemonCardBackgroundColor(pokemon);

  }
}
