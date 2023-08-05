import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GastosTotalPage } from './gastos-total.page';

describe('GastosTotalPage', () => {
  let component: GastosTotalPage;
  let fixture: ComponentFixture<GastosTotalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GastosTotalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
