import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { PokemonCardComponent } from './shared/components/pokemon-card/pokemon-card.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, PokemonCardComponent, HttpClientModule ],
})
export class AppComponent {
  constructor() {}
}
