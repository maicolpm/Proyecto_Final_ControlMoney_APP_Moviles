import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriaGastosAddEditPage } from './categoria-gastos-add-edit.page';

describe('CategoriaGastosAddEditPage', () => {
  let component: CategoriaGastosAddEditPage;
  let fixture: ComponentFixture<CategoriaGastosAddEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CategoriaGastosAddEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
