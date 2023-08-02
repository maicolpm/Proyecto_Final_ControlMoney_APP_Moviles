import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresosListadoPageRoutingModule } from './ingresos-listado-routing.module';

import { IngresosListadoPage } from './ingresos-listado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresosListadoPageRoutingModule
  ],
  declarations: [IngresosListadoPage]
})
export class IngresosListadoPageModule {}
