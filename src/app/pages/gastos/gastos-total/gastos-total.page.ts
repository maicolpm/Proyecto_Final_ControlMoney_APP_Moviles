import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-gastos-total',
  templateUrl: './gastos-total.page.html',
  styleUrls: ['./gastos-total.page.scss'],
})
export class GastosTotalPage implements OnInit {
  totalIngresosCategoria: { categoria: string; total: number }[] = [];
  constructor(private storage: Storage) { }

  ngOnInit() {
  }
  async ionViewWillEnter() {
    await this.storage.create();
    const ingresos = await this.storage.get('gastos') || [];

    const categorias = new Set<string>();
    ingresos.forEach((ingreso: any) => {
      categorias.add(ingreso.categoria);
    });

    categorias.forEach((categoria: string) => {
      const totalCategoria = ingresos
        .filter((ingreso: any) => ingreso.categoria === categoria)
        .reduce((total: number, ingreso: any) => total + ingreso.monto, 0);
      this.totalIngresosCategoria.push({ categoria, total: totalCategoria });
    });
  }

}