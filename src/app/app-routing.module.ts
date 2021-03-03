import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
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
  },  {
    path: 'category',
    loadChildren: () => import('./Products/category/category.module').then( m => m.CategoryPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
