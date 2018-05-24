import { Component, OnInit, Input } from "@angular/core";
import { ItinerarioService } from "../../services/itinerario.service";
import { Itinerario } from "../../models/Itinerario";

@Component({
  selector: "app-itinerario",
  templateUrl: "./itinerario.component.html",
  styleUrls: ["./itinerario.component.css"]
})
export class ItinerarioComponent implements OnInit {
  itinerarios: Itinerario[];

  constructor(private itinerarioService: ItinerarioService) {}

  ngOnInit() {
    this.itinerarioService
      .getItinerarios()
      .subscribe(iti => (this.itinerarios = iti));
  }
}
