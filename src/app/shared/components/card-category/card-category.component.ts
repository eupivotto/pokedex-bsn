import { Component, Input, OnDestroy,OnInit, EventEmitter, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { addCircle } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { CommonModule } from '@angular/common';
import { TypeColorsService } from 'src/app/core/services/type-colors.service';
import { ModalController, IonicModule } from '@ionic/angular';
import { IPokemonList, IPokemon } from '../../../models/pokemon.models';
import { PokemonsByTypesComponent } from 'src/app/modules/pages/pokemon-types-list/components/pokemons-by-types/pokemons-by-types.component';

@Component({
  selector: 'app-card-category',
  templateUrl: './card-category.component.html',
  standalone: true,
  styleUrls: ['./card-category.component.scss'],
  imports: [ CommonModule, RouterLink, IonicModule ],
})
export class CardCategoryComponent implements OnInit, OnDestroy {
  public getListPokemons: any;
  public getListTypes: any;

  @Output() public emitData: EventEmitter<string> = new EventEmitter();

  @Input() type: IPokemonList | any;
  @Input() pokemon: IPokemon | any;

  pokemonTypes: any[] = [];
  subscription: any;


  constructor(
    private pokemonService: PokemonService,
    public typeColorsService: TypeColorsService,
    private modalController: ModalController,
    private router: Router
  ) {
    addIcons({ addCircle });
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    this.getAllTypes();

  }


  async openModal(type: any) {
    // Abra o modal passando o tipo selecionado
    const modal = await this.modalController.create({
      component: PokemonsByTypesComponent,
      componentProps: { type },
    });
    await modal.present();
  }

  closeModal() {
    this.modalController.dismiss();
  }

  getAllTypes(): void {
    this.pokemonService.getPokemonListByTypes().subscribe((res) => {
      this.getListTypes = res.results.map((type: any) => type);
      console.log('lista da pag catedory', this.getListTypes);
    });
  }

  ngOnDestroy() {
    // Cleaning subscribe to memory leaks
    this.subscription.unsubscribe();
  }

  getTypeColorsCategory(type: string): string {
    return this.typeColorsService.getBackgroundColorType(type);
  }




}
