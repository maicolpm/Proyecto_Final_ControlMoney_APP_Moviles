import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlaceService } from 'src/app/services/place.service';
import { GastosService } from 'src/app/services/gastos.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-categoria-gastos-add-edit',
  templateUrl: './categoria-gastos-add-edit.page.html',
  styleUrls: ['./categoria-gastos-add-edit.page.scss'],
})
export class CategoriaGastosAddEditPage implements OnInit {
  
  // formulario: FormGroup;
  formGastosAddEdit: FormGroup;

  constructor(
    private gastosService: GastosService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.formGastosAddEdit = new FormGroup({
      name: new FormControl(),
      latitude: new FormControl(),
      longitude: new FormControl(),
      description: new FormControl(),
      image: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    console.log(this.formGastosAddEdit.value)
    const response = await this.gastosService.addGastos(this.formGastosAddEdit.value);
    console.log(response);
  }

}