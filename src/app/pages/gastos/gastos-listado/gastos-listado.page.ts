
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular'; // Importar NavController

@Component({
  selector: 'app-gastos-listado',
  templateUrl: './gastos-listado.page.html',
  styleUrls: ['./gastos-listado.page.scss'],
})
export class GastosListadoPage implements OnInit {
  gastos: any[] = [];

  constructor(private storage: Storage, private navCtrl: NavController) {}

  ngOnInit() {
    this.storage.create();
    // Obtener la lista de gastos al cargar la página
    this.storage.get('gastos').then((gastos: any[]) => {
      if (gastos) {
        this.gastos = gastos;
      }
    });
  }
  eliminarRegistro(gasto: any) {
    this.storage.create();
    // Filtrar el arreglo de gastos para excluir el gasto a eliminar
    this.gastos = this.gastos.filter((item) => item !== gasto);

    // Guardar la lista actualizada en el almacenamiento
    this.storage.set('gastos', this.gastos);
  }
}
