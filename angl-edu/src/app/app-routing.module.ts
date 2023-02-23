import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CustomPreloadStrategy } from './custom-preload-strategy';

const routes: Routes = [
  {
    path: 'user', 
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
    data: {
      title: 'User Page',
      preload: true,
    }
    // this data is like you can pass to any routing paths, in the respective route, here the case is in
    // custom-preload-stategy, from the routes we can use the data params we pass from here and do some manipulations 
    // or conditions or more over the other file.
  },
  {
    path: 'products',
    loadChildren: () => import('./product/product.module').then((m) => m.ProductModule),
    data: {
      preload: true,
    },
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then((m) => m.SearchModule),
    data: {
      preload: true,
    },
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { preloadingStrategy: CustomPreloadStrategy }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
