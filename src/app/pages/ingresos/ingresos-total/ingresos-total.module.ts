import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresosTotalPageRoutingModule } from './ingresos-total-routing.module';

import { IngresosTotalPage } from './ingresos-total.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresosTotalPageRoutingModule
  ],
  declarations: [IngresosTotalPage]
})
export class IngresosTotalPageModule {}
