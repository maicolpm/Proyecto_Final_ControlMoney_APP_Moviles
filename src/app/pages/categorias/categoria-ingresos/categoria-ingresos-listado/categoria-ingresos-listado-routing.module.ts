import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaIngresosListadoPage } from './categoria-ingresos-listado.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriaIngresosListadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriaIngresosListadoPageRoutingModule {}
