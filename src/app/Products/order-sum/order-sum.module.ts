import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderSumPageRoutingModule } from './order-sum-routing.module';

import { OrderSumPage } from './order-sum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderSumPageRoutingModule
  ],
  declarations: [OrderSumPage]
})
export class OrderSumPageModule {}
