import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OdrdeDetailsPageRoutingModule } from './odrde-details-routing.module';

import { OdrdeDetailsPage } from './odrde-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OdrdeDetailsPageRoutingModule
  ],
  declarations: [OdrdeDetailsPage]
})
export class OdrdeDetailsPageModule {}
