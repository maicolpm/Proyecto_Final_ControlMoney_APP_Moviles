import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GastosListadoPage } from './gastos-listado.page';

const routes: Routes = [
  {
    path: '',
    component: GastosListadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GastosListadoPageRoutingModule {}
