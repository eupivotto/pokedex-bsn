import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
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
    RouterLink
  ],
})
export class CardCategoryComponent implements OnInit {
  public getListPokemons: any;
  @Input() pokemon: any;
  types: string[] = [];
  backgroundColor: any;
  @Input() type: any;
  public getListTypes: any;

  constructor(
    private pokemonService: PokemonService,
    public typeColorsService: TypeColorsService,
    private router: Router
  ) {
    addIcons({ addCircle });
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    this.getAllTypes();

    this.pokemonService.gePokemonListByTypes().subscribe((res) => {
      this.getListTypes = res.results;
      console.log(this.getListTypes);
    });

  }

  getAllTypes(): void {
    this.pokemonService.getPokemonTypes().subscribe((res) => {
      this.types = res.results.map((type: any) => type.name);

    });
  }


  getTypeColorsCategory(type: string): string {
    return this.typeColorsService.getBackgroundColorType(type);
  }

  openPokemonListByType(type: string) {
    this.pokemonService.gePokemonListByTypes().subscribe((data) => {
      this.getListTypes = data.results.map((type) => type)
      // Navegar para a página de Pokémon e passar a lista de Pokémon do tipo clicado como parâmetro
      this.router.navigate(['/details'], { state: { pokemons: data } });
      console.log(data);


    });
  }




}
