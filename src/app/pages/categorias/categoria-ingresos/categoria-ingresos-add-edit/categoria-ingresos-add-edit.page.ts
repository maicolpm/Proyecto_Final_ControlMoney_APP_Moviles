import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PlaceService } from 'src/app/services/place.service';
@Component({
  selector: 'app-categoria-ingresos-add-edit',
  templateUrl: './categoria-ingresos-add-edit.page.html',
  styleUrls: ['./categoria-ingresos-add-edit.page.scss'],
})
export class CategoriaIngresosAddEditPage implements OnInit {

  
  formulario: FormGroup;

  constructor(
    private placesService: PlaceService
  ) {
    this.formulario = new FormGroup({
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
    console.log(this.formulario.value)
    const response = await this.placesService.addPlace(this.formulario.value);
    console.log(response);
  }

}