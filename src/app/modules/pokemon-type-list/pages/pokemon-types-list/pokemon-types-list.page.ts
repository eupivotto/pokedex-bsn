import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';


import { PokemonService } from 'src/app/shared/services/pokemon.service';
import { PokemonsByTypesComponent } from '../../components/pokemons-by-types/pokemons-by-types.component';



@Component({
    selector: 'app-pokemon-types-list',
    templateUrl: './pokemon-types-list.page.html',
    styleUrls: ['./pokemon-types-list.page.scss'],
    standalone: true,
    imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, PokemonsByTypesComponent ]
})
export class PokemonTypesListPage implements OnInit {

  @Input() pokemon: any
  public getListPokemons: any;


  constructor(private pokemonService: PokemonService) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {

    }



  }


