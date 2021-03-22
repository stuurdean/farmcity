import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OdersListPage } from './oders-list.page';

const routes: Routes = [
  {
    path: '',
    component: OdersListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OdersListPageRoutingModule {}
