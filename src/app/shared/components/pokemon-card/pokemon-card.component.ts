/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonContent, IonImg, IonCol, IonToolbar, IonButton, IonIcon, IonRow, IonCard, IonGrid, IonSearchbar, IonCardSubtitle, IonModal } from "@ionic/angular/standalone";
import { addCircle, heart } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { ModalDetailsComponent } from 'src/app/modules/pages/pokemon-details/components/modal-details/modal-details.component';
import { ModalController } from '@ionic/angular';
import { ModalService } from 'src/app/core/services/modal.service';
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
            IonImg,
          ]
})
export class PokemonCardComponent  implements OnInit {

 @Input() modal: IonModal | any;







  constructor(private modalController: ModalController) {

    addIcons({ addCircle, heart });
  }

  ngOnInit() {}

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalDetailsComponent,
      componentProps: {
        // Se necessário, você pode passar propriedades para o modal aqui
      }
    });
    await modal.present();
  }

  closeModal() {
    this.modalController.dismiss(); // Fecha o modal
  }


}


