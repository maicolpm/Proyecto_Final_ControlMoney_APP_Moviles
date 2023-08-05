import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  

  public selectedIndex: any;
  pages = [
    {
      title: 'Dashboard',
      url: '/home',
      icon: '/assets/imgs/logo.png'
    },
    {
      title: 'Pestañas',
      url: '/clientes-listado',
      icon: '/assets/imgs/pestana.png',
      children: [
        {
          title: 'Home',
          url: '/home',
          icon: '/assets/imgs/logo.png'
          
        },
        {
          title: 'Profile',
          url: '/profile',
          icon: '/assets/imgs/logo.png'
        },
        {
          title: 'About',
          url: '/about',
          icon: '/assets/imgs/logo.png'
        }
      ]
    },
    
    {
      title: 'Gastos',
      icon: '/assets/imgs/gastos.png',
      children: [
        {
          title: 'Registrar Gasto',
          url: '/gastos-add-edit',
          icon: '/assets/imgs/logo.png',
        },
        {
          title: 'Listas de Gastos',
          url: '/gastos-listado',
          icon: '/assets/imgs/logo.png',
        },
        {
          title: 'Total de Gastos',
          url: '/gastos-total',
          icon: '/assets/imgs/logo.png',
        }
      ]
    },
    {
      title: 'Ingresos',
      icon: '/assets/imgs/ingresos.png',
      children: [
        {
          title: 'Registrar Ingreso',
          url: '/ingresos-add-edit',
          icon: '/assets/imgs/ingresos.png',
        },
        {
          title: 'Lista de Ingresos',
          url: '/ingresos-listado',
          icon: '/assets/imgs/logo.png',
        },
        {
          title: 'Total de Ingresos',
          url: '/ingresos-total',
          icon: '/assets/imgs/logo.png',
        }
      ]
    }
  ];
  isSubmenuOpen: boolean[] = [];

  toggleSubmenu(index: number) {
    this.isSubmenuOpen[index] = !this.isSubmenuOpen[index];
  }
  constructor() {this.isSubmenuOpen = this.pages.map(_ => true);}
}
