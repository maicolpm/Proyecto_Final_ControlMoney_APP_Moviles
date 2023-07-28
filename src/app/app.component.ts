import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public selectedIndex:any;
  pages = [
    {
      title: 'Atenciones',
      url: '/ordenesdeservicio-listado',
      icon: '/assets/imgs/logo.png'
    },
    {
      title: 'Clientes',
      url: '/clientes-listado',
      icon: '/assets/imgs/logo.png'
    },
    {
      title: 'home',
      url: '/home',
      icon: '/assets/imgs/logo.png'
    },
    {
      title: 'profile',
      url: '/profile',
      icon: '/assets/imgs/logo.png'
    },
    {
      title: 'about',
      url: '/about',
      icon: '/assets/imgs/logo.png'
    }
  ];
  constructor(
    private menuController: MenuController,
    private router: Router) {}


  CerrarSesion() {
    this.router.navigate(['/login']);
  }

  closeMenu() {
    this.menuController.close();
  }
  dirigirAbout(){
    this.closeMenu();
    this.router.navigate(['about']);
  }
}
