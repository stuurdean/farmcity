import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OdrdeDetailsPage } from './odrde-details.page';

const routes: Routes = [
  {
    path: '',
    component: OdrdeDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OdrdeDetailsPageRoutingModule {}
