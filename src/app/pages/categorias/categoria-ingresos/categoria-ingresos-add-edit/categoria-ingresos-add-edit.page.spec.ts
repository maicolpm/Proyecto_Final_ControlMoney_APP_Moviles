import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriaIngresosAddEditPage } from './categoria-ingresos-add-edit.page';

describe('CategoriaIngresosAddEditPage', () => {
  let component: CategoriaIngresosAddEditPage;
  let fixture: ComponentFixture<CategoriaIngresosAddEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CategoriaIngresosAddEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
