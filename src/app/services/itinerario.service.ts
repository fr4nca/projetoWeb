import { Injectable } from '@angular/core';
import { Itinerario } from '../models/Itinerario';

@Injectable()
export class ItinerarioService {

  itinerarios: Itinerario [] = []

  constructor() { }

  addItinerario(iti: Itinerario){
    this.itinerarios.push(iti)
    console.log(iti)
  }

  getItinerarios(){
    return this.itinerarios
  }
}
