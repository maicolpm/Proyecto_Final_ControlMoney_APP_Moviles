import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaIngresosListadoPageRoutingModule } from './categoria-ingresos-listado-routing.module';

import { CategoriaIngresosListadoPage } from './categoria-ingresos-listado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaIngresosListadoPageRoutingModule
  ],
  declarations: [CategoriaIngresosListadoPage]
})
export class CategoriaIngresosListadoPageModule {}
