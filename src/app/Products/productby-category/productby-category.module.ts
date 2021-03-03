import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductbyCategoryPageRoutingModule } from './productby-category-routing.module';

import { ProductbyCategoryPage } from './productby-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductbyCategoryPageRoutingModule
  ],
  declarations: [ProductbyCategoryPage]
})
export class ProductbyCategoryPageModule {}
