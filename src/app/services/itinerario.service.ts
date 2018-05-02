import { Injectable } from '@angular/core';
import { Itinerario } from '../models/Itinerario';
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'
import { MOCK } from '../mock'

@Injectable()
export class ItinerarioService {

  itinerarios: Itinerario[]

  constructor() {
    this.getItinerarios().subscribe(iti => {
      this.itinerarios = iti
    });
  }

  addItinerario(iti: Itinerario) {
    this.itinerarios.push(iti)
    localStorage.setItem('itinerarios', JSON.stringify(this.itinerarios))
  }

  getItinerarios(): Observable<Itinerario[]> {
    if (localStorage.getItem('itinerarios') === null) {
      this.itinerarios = MOCK
    } else {
      this.itinerarios = JSON.parse(localStorage.getItem('itinerarios'))
    }
    return of(this.itinerarios)
  }
}
