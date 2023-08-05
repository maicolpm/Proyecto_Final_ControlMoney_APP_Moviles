import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gastos-add-edit',
  templateUrl: './gastos-add-edit.page.html',
  styleUrls: ['./gastos-add-edit.page.scss'],
})
export class GastosAddEditPage implements OnInit {
  monto: number = 0;
  categoria: string = '';
  detalles: string = '';
  fecha: Date = new Date(); 
  constructor(
    private storage: Storage,
    private router: Router,) {
    this.monto = 0;
   }

  ngOnInit() {
  }

  guardarRegistro() {
    
    // Crear un objeto con los datos de gasto
    const gasto = {
      monto: this.monto,
      categoria: this.categoria,
      detalles: this.detalles,
      fecha: new Date()
    };

    // Guardar el gasto en la base de datos local
    this.storage.create();
    this.storage.get('gastos').then((gastos: any[]) => {
      if (gastos) {
        gastos.push(gasto);
        this.storage.set('gastos', gastos);
      } else {
        this.storage.set('gastos', [gasto]);
      }
      console.log('Gasto guardado exitosamente.');
      this.router.navigate(['/gastos-listado']);
      this.resetFields();
    }).catch(error => {
      console.log('Error al guardar el gasto:', error);
    });
  }

  resetFields() {
    this.monto = 0;
    this.categoria = '';
    this.detalles = '';
  }
}
