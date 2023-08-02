import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaIngresosAddEditPage } from './categoria-ingresos-add-edit.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriaIngresosAddEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriaIngresosAddEditPageRoutingModule {}
