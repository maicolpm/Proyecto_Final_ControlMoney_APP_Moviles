import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Place from '../models/place.model';

@Injectable({
  providedIn: 'root'
})
export class GastosService {

  constructor(private firestore: Firestore) { }

  addGastos(place: Place) {
    const placeRef = collection(this.firestore, 'places');
    return addDoc(placeRef, place);
  }

  getGastos(): Observable<Place[]> {
    const placeRef = collection(this.firestore, 'places');
    return collectionData(placeRef, { idField: 'id' }) as Observable<Place[]>;
  }

  deleteGastos(place: Place) {
    const placeDocRef = doc(this.firestore, `places/${place.id}`);
    return deleteDoc(placeDocRef);
  }
}
