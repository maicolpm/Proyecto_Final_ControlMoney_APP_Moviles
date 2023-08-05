import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-ingresos-add-edit',
  templateUrl: './ingresos-add-edit.page.html',
  styleUrls: ['./ingresos-add-edit.page.scss'],
})
export class IngresosAddEditPage implements OnInit {
  monto: number = 0;
  categoria: string='';
  detalles: string='';
  constructor(private navCtrl: NavController, private storage: Storage) { }

  ngOnInit() {
  }
  async guardarIngreso() {
    const ingreso = {
      monto: this.monto,
      categoria: this.categoria,
      detalles: this.detalles,
      fecha: new Date()
    };

    await this.storage.create();
    const ingresos = await this.storage.get('ingresos') || [];
    ingresos.push(ingreso);
    await this.storage.set('ingresos', ingresos);

    this.navCtrl.navigateForward('/ingresos-listado');
  }

}
