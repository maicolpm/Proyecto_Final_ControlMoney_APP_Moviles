import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngresosAddEditPage } from './ingresos-add-edit.page';

describe('IngresosAddEditPage', () => {
  let component: IngresosAddEditPage;
  let fixture: ComponentFixture<IngresosAddEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IngresosAddEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
