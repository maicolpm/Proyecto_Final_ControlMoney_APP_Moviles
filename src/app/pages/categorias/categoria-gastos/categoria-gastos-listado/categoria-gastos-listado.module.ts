import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaGastosListadoPageRoutingModule } from './categoria-gastos-listado-routing.module';

import { CategoriaGastosListadoPage } from './categoria-gastos-listado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaGastosListadoPageRoutingModule
  ],
  declarations: [CategoriaGastosListadoPage]
})
export class CategoriaGastosListadoPageModule {}
