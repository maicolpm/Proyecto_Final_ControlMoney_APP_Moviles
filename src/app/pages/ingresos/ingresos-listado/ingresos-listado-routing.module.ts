import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresosListadoPage } from './ingresos-listado.page';

const routes: Routes = [
  {
    path: '',
    component: IngresosListadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresosListadoPageRoutingModule {}
