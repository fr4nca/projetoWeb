import { Component, OnInit } from "@angular/core";
import { ItinerarioService } from "../../services/itinerario.service";
import { RouterModule, Routes, ActivatedRoute } from "@angular/router";
import { Itinerario } from "../../models/Itinerario";
import { Atividade } from "../../models/Atividade";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"]
})
export class IndexComponent implements OnInit {
  itinerarios;

  constructor(private itinerarioService: ItinerarioService) {
    this.itinerarioService.getItinerarios().subscribe(iti => {
      this.itinerarios = iti.sort((a,b) => b.rate_it - a.rate_it);
    });
  }


  ngOnInit() {}
}
