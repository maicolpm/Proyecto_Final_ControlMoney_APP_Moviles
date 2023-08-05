import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GastosTotalPageRoutingModule } from './gastos-total-routing.module';

import { GastosTotalPage } from './gastos-total.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GastosTotalPageRoutingModule
  ],
  declarations: [GastosTotalPage]
})
export class GastosTotalPageModule {}
