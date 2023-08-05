import { Component, OnInit } from '@angular/core';
import Place from 'src/app/models/place.model';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-categoria-gastos-listado',
  templateUrl: './categoria-gastos-listado.page.html',
  styleUrls: ['./categoria-gastos-listado.page.scss'],
})
export class CategoriaGastosListadoPage implements OnInit {
  places: Place[];

  constructor(
    private placesService: PlaceService
  ) {
    this.places = [{
      name: 'Prueba de sitio',
      description: 'Esto es una prueba',
      latitude: 40,
      longitude: -3,
      image: 'https://media.timeout.com/images/105718969/750/422/image.jpg'
    }];
  }

  ngOnInit(): void {
    this.placesService.getPlaces().subscribe(places => {
      this.places = places;
    })
  }

  async onClickDelete(place: Place) {
    const response = await this.placesService.deletePlace(place);
    console.log(response);
  }

}
