import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/usuarios/login/login.page';
import { RegistrarusuarioPage } from './pages/usuarios/registrarusuario/registrarusuario.page';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  /*{
    path: 'login',
    component: LoginPage,
    ...canActivate(() => redirectUnauthorizedTo(['/registrarusuario']))
  },*/
  {
    path: 'clientes-add-edit',
    loadChildren: () => import('./pages/clientes/clientes-add-edit/clientes-add-edit.module').then(m => m.ClientesAddEditPageModule)
  },
  {
    path: 'clientes-listado',
    loadChildren: () => import('./pages/clientes/clientes-listado/clientes-listado.module').then(m => m.ClientesListadoPageModule)
  },
  {
    path: 'clientes-add-edit/:id',
    loadChildren: () => import('./pages/clientes/clientes-add-edit/clientes-add-edit.module').then(m => m.ClientesAddEditPageModule)
  },
  {
    path: 'ordenesdeservicio-add-edit',
    loadChildren: () => import('./pages/ordenesdeservicio/ordenesdeservicio-add-edit/ordenesdeservicio-add-edit.module').then(m => m.OrdenesDeServicioAddEditPageModule)
  },
  {
    path: 'ordenesdeservicio-add-edit/:id',
    loadChildren: () => import('./pages/ordenesdeservicio/ordenesdeservicio-add-edit/ordenesdeservicio-add-edit.module').then(m => m.OrdenesDeServicioAddEditPageModule)
  },
  {
    path: 'ordenesdeservicio-listado',
    loadChildren: () => import('./pages/ordenesdeservicio/ordenesdeservicio-listado/ordenesdeservicio-listado.module').then(m => m.OrdenesdeservicioListadoPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'clientes-search',
    loadChildren: () => import('./pages/clientes/clientes-search/clientes-search.module').then(m => m.ClientesSearchPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/usuarios/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrarusuario',
    loadChildren: () => import('./pages/usuarios/registrarusuario/registrarusuario.module').then( m => m.RegistrarusuarioPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/usuarios/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  
  {
    path: 'home',
    loadChildren: () => import('./pages/tabs/home/home.module').then( m => m.HomePageModule),
    ...canActivate(() => redirectUnauthorizedTo(['/login'])),
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/tabs/profile/profile.module').then( m => m.ProfilePageModule),
    ...canActivate(() => redirectUnauthorizedTo(['/login'])),
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/tabs/about/about.module').then( m => m.AboutPageModule),
    ...canActivate(() => redirectUnauthorizedTo(['/login'])),
  },



  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    ...canActivate(() => redirectUnauthorizedTo(['/login'])),
  },
  {
    path: 'gastos-add-edit',
    loadChildren: () => import('./pages/gastos/gastos-add-edit/gastos-add-edit.module').then( m => m.GastosAddEditPageModule),
    ...canActivate(() => redirectUnauthorizedTo(['/login'])),
  },
  {
    path: 'gastos-listado',
    loadChildren: () => import('./pages/gastos/gastos-listado/gastos-listado.module').then( m => m.GastosListadoPageModule),
    ...canActivate(() => redirectUnauthorizedTo(['/login'])),
  },
  {
    path: 'ingresos-add-edit',
    loadChildren: () => import('./pages/ingresos/ingresos-add-edit/ingresos-add-edit.module').then( m => m.IngresosAddEditPageModule),
    ...canActivate(() => redirectUnauthorizedTo(['/login'])),
  },
  {
    path: 'ingresos-listado',
    loadChildren: () => import('./pages/ingresos/ingresos-listado/ingresos-listado.module').then( m => m.IngresosListadoPageModule),
    ...canActivate(() => redirectUnauthorizedTo(['/login'])),
  },
  {
    path: 'categoria-gastos-add-edit',
    loadChildren: () => import('./pages/categorias/categoria-gastos/categoria-gastos-add-edit/categoria-gastos-add-edit.module').then( m => m.CategoriaGastosAddEditPageModule)
  },
  {
    path: 'categoria-gastos-listado',
    loadChildren: () => import('./pages/categorias/categoria-gastos/categoria-gastos-listado/categoria-gastos-listado.module').then( m => m.CategoriaGastosListadoPageModule)
  },
  {
    path: 'categoria-ingresos-add-edit',
    loadChildren: () => import('./pages/categorias/categoria-ingresos/categoria-ingresos-add-edit/categoria-ingresos-add-edit.module').then( m => m.CategoriaIngresosAddEditPageModule)
  },
  {
    path: 'categoria-ingresos-listado',
    loadChildren: () => import('./pages/categorias/categoria-ingresos/categoria-ingresos-listado/categoria-ingresos-listado.module').then( m => m.CategoriaIngresosListadoPageModule)
  },
  {
    path: 'gastos-total',
    loadChildren: () => import('./pages/gastos/gastos-total/gastos-total.module').then( m => m.GastosTotalPageModule),
    ...canActivate(() => redirectUnauthorizedTo(['/login'])),
  },
  {
    path: 'ingresos-total',
    loadChildren: () => import('./pages/ingresos/ingresos-total/ingresos-total.module').then( m => m.IngresosTotalPageModule),
    ...canActivate(() => redirectUnauthorizedTo(['/login'])),
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
