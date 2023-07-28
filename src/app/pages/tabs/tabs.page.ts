import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(
    private menuController: MenuController,
    private router: Router) { }

  ngOnInit() {
  }

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
