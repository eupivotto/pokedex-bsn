import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IonSearchbar, IonCardSubtitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  standalone: true,
  styleUrls: ['./search-pokemon.component.scss'],
  imports:[IonSearchbar, IonCardSubtitle]
})
export class SearchPokemonComponent  implements OnInit {
  @Output() public emitsearch: EventEmitter<string> = new EventEmitter();

  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}

  public search(value: any) {
    this.emitsearch.emit(value);

  }

}
