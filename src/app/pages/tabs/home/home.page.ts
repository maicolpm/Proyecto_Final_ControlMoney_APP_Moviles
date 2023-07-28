import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor( 
    private menuController: MenuController,
    private router: Router,
    
    private userService: UserService,
    
    ) { }

  ngOnInit() {
  }

  closeMenu() {
    this.menuController.close();
  }
  CerrarSesion() {
    this.userService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }
  

}
