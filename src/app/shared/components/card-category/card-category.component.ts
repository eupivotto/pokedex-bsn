import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  EventEmitter,
  Output,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { addCircle } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { CommonModule } from '@angular/common';
import { ModalController, IonicModule } from '@ionic/angular';
import { IPokemonList, IPokemon } from '../../models/pokemon.models';
import { PokemonsByTypesComponent } from 'src/app/modules/pokemon-type-list/components/pokemons-by-types/pokemons-by-types.component';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-card-category',
  templateUrl: './card-category.component.html',
  standalone: true,
  styleUrls: ['./card-category.component.scss'],
  imports: [CommonModule, RouterLink, IonicModule],
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
    public utils: UtilsService,
    private modalController: ModalController,
    private router: Router
  ) {
    addIcons({ addCircle });
  }


  ngOnInit(): void {
    this.getAllTypes();
  }

  //open modal and send data types
  async openModal(type: any) {
    // Abra o modal passando o tipo selecionado
    const modal = await this.modalController.create({
      component: PokemonsByTypesComponent,
      componentProps: { type },
    });
    await modal.present();
  }

  //close modal function
  closeModal() {
    this.modalController.dismiss();
  }

  // get all types data
  getAllTypes(): void {
    this.utils.pokemonService.getPokemonListByTypes().subscribe((res: any) => {
      this.getListTypes = res.results.map((type: any) => type);

    });
  }

  ngOnDestroy() {
    // Cleaning subscribe to memory leaks
    this.subscription.unsubscribe();
  }

  //function on get color category
  getTypeColorsCategory(type: string): string {
    return this.utils.typeColorsService.getBackgroundColorType(type);
  }
}
