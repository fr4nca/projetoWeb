import { Component, OnInit, Input } from "@angular/core";
import { RouterModule, Routes, ActivatedRoute } from "@angular/router";
import { Itinerario } from "../../models/Itinerario";
import { Local } from "../../models/Local";
import { ItinerarioService } from "../../services/itinerario.service";
import { MapsAPILoader } from "@agm/core";

@Component({
  selector: "app-pesq-local",
  templateUrl: "./pesq-local.component.html",
  styleUrls: ["./pesq-local.component.css"]
})
export class PesqLocalComponent implements OnInit {
  pesqIti: Itinerario[];
  pItinerario: Itinerario[];
  pesqCity;
  pLocal;
  mensagem;
  t;
  arrayLocais: string[] = [];

  constructor(
    private itiService: ItinerarioService,
    private mapsAPILoader: MapsAPILoader
  ) {}

  ngOnInit() {}

  pesquisarCidade() {
    this.pItinerario = [];
    this.pLocal = false;

    this.itiService.getItinerarios().subscribe(itinera => {
      this.pesqIti = itinera;

      for (var i = 0; i < this.pesqIti.length; i++) {
        if (this.pesqIti[i].local.local.includes(this.pesqCity)) {
          this.pItinerario.push(this.pesqIti[i]);
          this.pLocal = true;
        }
      }
      if (this.pLocal) {
        this.mensagem = false;
      } else {
        this.mensagem = true;
      }
    });
  }
}
