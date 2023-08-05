import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresosTotalPage } from './ingresos-total.page';

const routes: Routes = [
  {
    path: '',
    component: IngresosTotalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresosTotalPageRoutingModule {}
