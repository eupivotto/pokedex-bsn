import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'category',
    loadComponent: () => import('./modules/pages/category/category.page').then( m => m.CategoryPage)
  },
  {
    path: 'pokemon-details',
    loadComponent: () => import('./modules/pages/pokemon-details/pokemon-details.page').then( m => m.PokemonDetailsPage)
  },
  {
    path: 'favorites',
    loadComponent: () => import('./modules/pages/favorites/favorites.page').then( m => m.FavoritesPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./modules/pages/home/home.page').then( m => m.HomePage)
  },
];
