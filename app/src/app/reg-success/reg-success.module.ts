import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegSuccessPageRoutingModule } from './reg-success-routing.module';

import { RegSuccessPage } from './reg-success.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegSuccessPageRoutingModule
  ],
  declarations: [RegSuccessPage]
})
export class RegSuccessPageModule {}
