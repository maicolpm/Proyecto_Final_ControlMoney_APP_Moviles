import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GastosAddEditPage } from './gastos-add-edit.page';

const routes: Routes = [
  {
    path: '',
    component: GastosAddEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GastosAddEditPageRoutingModule {}
