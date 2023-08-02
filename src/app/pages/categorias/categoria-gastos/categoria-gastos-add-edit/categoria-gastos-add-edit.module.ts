import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaGastosAddEditPageRoutingModule } from './categoria-gastos-add-edit-routing.module';

import { CategoriaGastosAddEditPage } from './categoria-gastos-add-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaGastosAddEditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CategoriaGastosAddEditPage]
})
export class CategoriaGastosAddEditPageModule {}
