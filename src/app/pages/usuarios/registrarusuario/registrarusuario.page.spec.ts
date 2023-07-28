import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarusuarioPage } from './registrarusuario.page';

describe('RegistrarusuarioPage', () => {
  let component: RegistrarusuarioPage;
  let fixture: ComponentFixture<RegistrarusuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistrarusuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
