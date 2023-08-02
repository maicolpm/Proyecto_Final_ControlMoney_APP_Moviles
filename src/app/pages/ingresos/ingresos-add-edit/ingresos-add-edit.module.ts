import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresosAddEditPageRoutingModule } from './ingresos-add-edit-routing.module';

import { IngresosAddEditPage } from './ingresos-add-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresosAddEditPageRoutingModule
  ],
  declarations: [IngresosAddEditPage]
})
export class IngresosAddEditPageModule {}
