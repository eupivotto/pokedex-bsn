import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../../shared/components/header/header.component";

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.page.html',
    styleUrls: ['./favorites.page.scss'],
    standalone: true,
    imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent]
})
export class FavoritesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
