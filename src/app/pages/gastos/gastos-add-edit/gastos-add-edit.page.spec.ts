import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GastosAddEditPage } from './gastos-add-edit.page';

describe('GastosAddEditPage', () => {
  let component: GastosAddEditPage;
  let fixture: ComponentFixture<GastosAddEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GastosAddEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
