import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaIngresosAddEditPageRoutingModule } from './categoria-ingresos-add-edit-routing.module';

import { CategoriaIngresosAddEditPage } from './categoria-ingresos-add-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaIngresosAddEditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CategoriaIngresosAddEditPage]
})
export class CategoriaIngresosAddEditPageModule {}
