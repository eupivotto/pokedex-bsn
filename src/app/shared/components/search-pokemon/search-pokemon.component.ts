import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IonSearchbar, IonCardSubtitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  standalone: true,
  styleUrls: ['./search-pokemon.component.scss'],
  imports: [IonSearchbar, IonCardSubtitle],
})
export class SearchPokemonComponent {
  @Output() public emitsearch: EventEmitter<string> = new EventEmitter();

  constructor() {}

  //functionn to serach usgin a event
  public search(value: any) {
    this.emitsearch.emit(value);
  }
}
