import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngresosListadoPage } from './ingresos-listado.page';

describe('IngresosListadoPage', () => {
  let component: IngresosListadoPage;
  let fixture: ComponentFixture<IngresosListadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IngresosListadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
