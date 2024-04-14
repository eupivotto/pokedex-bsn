import { Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';
import { HomePage } from './modules/pages/home/home.page';
import { FavoritesPage } from './modules/pages/favorites/favorites.page';
import { CategoryPage } from './modules/pages/category/category.page';

import { PokemonTypesListPage } from './modules/pages/pokemon-types-list/pokemon-types-list.page';
import { ModalDetailsComponent } from './modules/pages/pokemon-details/components/modal-details/modal-details.component';



export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      { path: 'home', component: HomePage },
      { path: 'favorites', component: FavoritesPage },
      { path: 'category', component: CategoryPage },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'list-types', component: PokemonTypesListPage },
      { path: 'pokemon-details/:name', component: ModalDetailsComponent}
    ]
  },
  { path: '**', redirectTo: '' },
  {
    path: 'pokemon-types-list',
    loadComponent: () => import('./modules/pages/pokemon-types-list/pokemon-types-list.page').then( m => m.PokemonTypesListPage)
  }

];
