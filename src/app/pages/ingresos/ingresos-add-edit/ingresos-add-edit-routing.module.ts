import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresosAddEditPage } from './ingresos-add-edit.page';

const routes: Routes = [
  {
    path: '',
    component: IngresosAddEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresosAddEditPageRoutingModule {}
