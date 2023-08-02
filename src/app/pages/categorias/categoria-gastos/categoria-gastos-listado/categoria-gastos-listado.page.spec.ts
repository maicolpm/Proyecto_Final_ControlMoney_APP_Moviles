import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriaGastosListadoPage } from './categoria-gastos-listado.page';

describe('CategoriaGastosListadoPage', () => {
  let component: CategoriaGastosListadoPage;
  let fixture: ComponentFixture<CategoriaGastosListadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CategoriaGastosListadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
