import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },

  {
    path: 'signin',
    loadChildren: () => import('./Auth/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./Auth/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./Auth/forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'profile/:ref',
    loadChildren: () => import('./Auth/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'productdetails/:ref',
    loadChildren: () => import('./Products/productdetails/productdetails.module').then( m => m.ProductdetailsPageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./Products/category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'productby-category/:ref',
    loadChildren: () => import('./Products/productby-category/productby-category.module').then( m => m.ProductbyCategoryPageModule)
  },
  {
    path: 'searchpage',
    loadChildren: () => import('./searchpage/searchpage.module').then( m => m.SearchpagePageModule)
  },
  {
    path: 'oders-list',
    loadChildren: () => import('./Products/oders-list/oders-list.module').then( m => m.OdersListPageModule)
  },
  {
    path: 'odrde-details',
    loadChildren: () => import('./Products/odrde-details/odrde-details.module').then( m => m.OdrdeDetailsPageModule)
  },

  {
    path: 'account',
    loadChildren: () => import('./Auth/account/account.module').then( m => m.AccountPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
