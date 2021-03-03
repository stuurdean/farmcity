import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductbyCategoryPage } from './productby-category.page';

const routes: Routes = [
  {
    path: '',
    component: ProductbyCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductbyCategoryPageRoutingModule {}
