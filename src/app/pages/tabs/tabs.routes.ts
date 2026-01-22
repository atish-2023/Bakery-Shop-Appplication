import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'explore',
        loadComponent: () => import('./explore/explore.page').then((m) => m.ExplorePage),
      },
      {
        path: 'wishlist',
        loadComponent: () => import('./wishlist/wishlist.page').then((m) => m.WishlistPage),
      },
      {
        path: 'account',
        loadComponent: () =>
          import('./account/account.page').then((m) => m.AccountPage),
      },
    ],
  },
  {
    path: 'products/:id',
    loadComponent: () =>
      import('./product-detail/product-detail.page').then(
        (m) => m.ProductDetailPage
      ),
  },
];
