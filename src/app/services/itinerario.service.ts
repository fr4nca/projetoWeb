import { Injectable } from "@angular/core";
import { Itinerario } from "../models/Itinerario";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ItinerarioService {
  itinerarios: Itinerario[];

  constructor(private http: HttpClient) {
    this.getItinerarios().subscribe(iti => {
      this.itinerarios = iti;
    });
  }

  updateIti(iti: Itinerario) {
    return this.http.post("/api/itinerario/update", iti);
  }

  addItinerario(iti: Itinerario) {
    return this.http.post("/api/itinerario/add", iti);
  }

  getItinerario(id): Observable<any> {
    return this.http.get(`/api/itinerario/${id}`);
  }

  getItinerarios(): Observable<any> {
    return this.http.get("/api/itinerarios");
  }

  getPhotos(id): Observable<any> {
    return this.http.get(`/api/photos/${id}`);
  }
}
