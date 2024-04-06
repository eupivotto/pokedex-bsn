import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { PokemonCardComponent } from 'src/app/shared/components/pokemon-card/pokemon-card.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
    standalone: true,
    imports: [CommonModule, FormsModule, HeaderComponent, PokemonCardComponent]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
