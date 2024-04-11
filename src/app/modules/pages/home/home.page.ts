import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { PokemonCardComponent } from 'src/app/shared/components/pokemon-card/pokemon-card.component';
import { ModalDetailsComponent } from '../pokemon-details/components/modal-details/modal-details.component';
import { SearchPokemonComponent } from "../../../shared/components/search-pokemon/search-pokemon.component";


@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
    standalone: true,
    imports: [
        FormsModule,
        HeaderComponent,
        PokemonCardComponent,
        ModalDetailsComponent,
        CommonModule,
        SearchPokemonComponent
    ],

})
export class HomePage implements OnInit {
  isModalOpen = false;


  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}





}
