import { Routes } from '@angular/router';
import { HomePage } from './modules/home/pages/home/home.page';
import { FavoritesPage } from './modules/favorites/pages/favorites/favorites.page';
import { TabsPage } from './modules/tabs/pages/tabs.page';
import { CategoryPage } from './modules/category/pages/category/category.page';
import { PokemonTypesListPage } from './modules/pokemon-type-list/pages/pokemon-types-list/pokemon-types-list.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomePage },
      { path: 'favorites', component: FavoritesPage },
      { path: 'category', component: CategoryPage },
      { path: 'list-types', component: PokemonTypesListPage },
    ],
  },
  { path: '**', redirectTo: '' },
];
