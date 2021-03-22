import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OdersListPageRoutingModule } from './oders-list-routing.module';

import { OdersListPage } from './oders-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OdersListPageRoutingModule
  ],
  declarations: [OdersListPage]
})
export class OdersListPageModule {}
