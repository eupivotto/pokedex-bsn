import { Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';
import { HomePage } from './modules/pages/home/home.page';
import { FavoritesPage } from './modules/pages/favorites/favorites.page';
import { CategoryPage } from './modules/pages/category/category.page';



export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      { path: 'home', component: HomePage },
      { path: 'favorites', component: FavoritesPage },
      { path: 'category', component: CategoryPage },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '' }
];
