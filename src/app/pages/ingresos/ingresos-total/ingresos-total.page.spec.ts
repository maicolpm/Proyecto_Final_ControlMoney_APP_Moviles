import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngresosTotalPage } from './ingresos-total.page';

describe('IngresosTotalPage', () => {
  let component: IngresosTotalPage;
  let fixture: ComponentFixture<IngresosTotalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IngresosTotalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
