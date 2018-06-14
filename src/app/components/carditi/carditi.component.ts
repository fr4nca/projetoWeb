import { Component, OnInit, Input } from "@angular/core";
import { RouterModule, Routes, ActivatedRoute } from "@angular/router";
import { ItinerarioService } from "../../services/itinerario.service";
import { Itinerario } from "../../models/Itinerario";
import { Atividade } from "../../models/Atividade";

@Component({
  selector: "app-carditi",
  templateUrl: "./carditi.component.html",
  styleUrls: ["./carditi.component.css"]
})
export class CarditiComponent implements OnInit {
  @Input() itinerario;
  itinerarios: Itinerario[] = [];
  rate;
  id;

  constructor(private itinerarioService: ItinerarioService) {}

  getItinerarios(): void {
    this.itinerarioService.getItinerarios()
      .subscribe(itinerarios => (this.itinerarios = itinerarios));
    this.rate = this.itinerario.rate_it;
  }

  ngOnInit() {
    this.getItinerarios();
  }
}
