import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriaIngresosListadoPage } from './categoria-ingresos-listado.page';

describe('CategoriaIngresosListadoPage', () => {
  let component: CategoriaIngresosListadoPage;
  let fixture: ComponentFixture<CategoriaIngresosListadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CategoriaIngresosListadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
