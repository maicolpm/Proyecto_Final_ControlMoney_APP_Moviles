import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GastosTotalPage } from './gastos-total.page';

const routes: Routes = [
  {
    path: '',
    component: GastosTotalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GastosTotalPageRoutingModule {}
