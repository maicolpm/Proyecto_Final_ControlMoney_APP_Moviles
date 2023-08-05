import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  showButtons: boolean = false;

  totalDia: number = 0;
  totalSemana: number = 0;
  totalMes: number = 0;
  totalGastos: number = 0;

  totalIngresosDia: number = 0;
  totalIngresosSemana: number = 0;
  totalIngresosMes: number = 0;
  totalIngresos: number = 0;
  constructor(
    private menuController: MenuController,
    private router: Router,

    private userService: UserService,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.calcularTotalGastos();
    this.calcularTotalIngresos();
  }

  toggleButtons() {
    this.showButtons = !this.showButtons;
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

  calcularTotalGastos() {
    this.storage.create();
    this.storage.get('gastos').then((gastos: any[]) => {

      console.log('Gastos:', gastos); // Verificar la lista de gastos cargada

      if (gastos) {
        this.totalGastos = gastos.reduce((total, gasto) => total + gasto.monto, 0);

        const fechaActual = new Date().toISOString().substr(0, 10);
        this.totalDia = gastos
          .filter(gasto => {
            const gastoFecha = new Date(gasto.fecha).toISOString().substr(0, 10);
            return gastoFecha === fechaActual;
          })
          .reduce((total, gasto) => total + gasto.monto, 0);


        const fechaActualObj = new Date();
        const fechaInicioSemana = new Date(
          fechaActualObj.getFullYear(),
          fechaActualObj.getMonth(),
          fechaActualObj.getDate() - fechaActualObj.getDay()
        );
        this.totalSemana = gastos
          .filter(gasto => {
            const gastoFecha = new Date(gasto.fecha);
            return gastoFecha >= fechaInicioSemana;
          })
          .reduce((total, gasto) => total + gasto.monto, 0);

        const fechaInicioMes = new Date(
          fechaActualObj.getFullYear(),
          fechaActualObj.getMonth(),
          1
        );
        this.totalMes = gastos
          .filter(gasto => {
            const gastoFecha = new Date(gasto.fecha);
            return gastoFecha >= fechaInicioMes;
          })
          .reduce((total, gasto) => total + gasto.monto, 0);

      }
    });
  }
  calcularTotalIngresos() {
    this.storage.create();
    this.storage.get('ingresos').then((ingresos: any[]) => {
      console.log('ingresos:', ingresos); // Verificar la lista de ingresos cargada
  
      if (ingresos) {
        this.totalIngresos = ingresos.reduce((total, ingreso) => total + ingreso.monto, 0);
  
        const fechaActual = new Date().toISOString().substr(0, 10);
        this.totalIngresosDia = ingresos
          .filter(ingreso => {
            const ingresoFecha = new Date(ingreso.fecha).toISOString().substr(0, 10);
            return ingresoFecha === fechaActual;
          })
          .reduce((total, ingreso) => total + ingreso.monto, 0);
  
        const fechaActualObj = new Date();
        const fechaInicioSemana = new Date(
          fechaActualObj.getFullYear(),
          fechaActualObj.getMonth(),
          fechaActualObj.getDate() - fechaActualObj.getDay()
        );
        this.totalIngresosSemana = ingresos
          .filter(ingreso => {
            const ingresoFecha = new Date(ingreso.fecha);
            return ingresoFecha >= fechaInicioSemana;
          })
          .reduce((total, ingreso) => total + ingreso.monto, 0);
  
        const fechaInicioMes = new Date(
          fechaActualObj.getFullYear(),
          fechaActualObj.getMonth(),
          1
        );
        this.totalIngresosMes = ingresos
          .filter(ingreso => {
            const ingresoFecha = new Date(ingreso.fecha);
            return ingresoFecha >= fechaInicioMes;
          })
          .reduce((total, ingreso) => total + ingreso.monto, 0);
      }
    });
  }
}  