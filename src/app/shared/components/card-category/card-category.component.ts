import { Component, Input, OnInit } from '@angular/core';
import {
  IonCard,
  IonCardTitle,
  IonIcon,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonRow,
  IonCol,
  IonGrid,
  IonTitle,
  IonButton,
} from '@ionic/angular/standalone';
import { addCircle } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { CommonModule } from '@angular/common';
import { TypeColorsService } from 'src/app/core/services/type-colors.service';

@Component({
  selector: 'app-card-category',
  templateUrl: './card-category.component.html',
  standalone: true,
  styleUrls: ['./card-category.component.scss'],
  imports: [
    IonButton,
    IonTitle,
    IonGrid,
    IonCol,
    IonRow,
    IonIcon,
    IonCard,
    IonCardContent,
    IonCardSubtitle,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    CommonModule,
  ],
})
export class CardCategoryComponent implements OnInit {
  public getListPokemons: any;
  @Input() pokemon: any;
  types: string[] = [];
  backgroundColor: any;
  @Input() type: any;

  constructor(
    private pokemonService: PokemonService,
    public typeColorsService: TypeColorsService
  ) {
    addIcons({ addCircle });
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    this.getAllTypes();
   
  }

  getAllTypes(): void {
    this.pokemonService.getPokemonTypes().subscribe((res) => {
      this.types = res.results.map((type: any) => type.name);
      console.log(this.types);
    });
  }




  getTypeColorsCategory(type: string): string {
    return this.typeColorsService.getBackgroundColorType(type);
  }
}
