import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GastosAddEditPageRoutingModule } from './gastos-add-edit-routing.module';

import { GastosAddEditPage } from './gastos-add-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GastosAddEditPageRoutingModule
  ],
  declarations: [GastosAddEditPage]
})
export class GastosAddEditPageModule {}
