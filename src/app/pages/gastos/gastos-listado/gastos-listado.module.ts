import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GastosListadoPageRoutingModule } from './gastos-listado-routing.module';

import { GastosListadoPage } from './gastos-listado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GastosListadoPageRoutingModule
  ],
  declarations: [GastosListadoPage]
})
export class GastosListadoPageModule {}
