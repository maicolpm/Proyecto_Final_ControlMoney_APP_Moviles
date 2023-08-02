import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GastosListadoPage } from './gastos-listado.page';

describe('GastosListadoPage', () => {
  let component: GastosListadoPage;
  let fixture: ComponentFixture<GastosListadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GastosListadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
