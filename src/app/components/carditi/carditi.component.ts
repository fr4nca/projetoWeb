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

  // ranking() {
  //   let i: number;
  //   let z: number = 0;
  //   let w: number = 0;
  //   for (i = 0; i <= this.itinerarios.length; i++) {
  //     if (this.itinerario.rate_it == 5 && this.itinerario.id == i + 1) {
  //       this.itinerariosRank5[z] = this.itinerarios[i];
  //       z = z + 1;
  //     } else {
  //       if (this.itinerario.rate_it == 4 && this.itinerario.id == i + 1) {
  //         this.itinerariosRank4[i] = this.itinerarios[i];
  //         //w = w + 1;
  //       }
  //     }
  //   }
  //   console.log("I--------------------");
  //   console.log("Rank 5: " + this.itinerariosRank5);
  //   console.log("Rank 4: " + this.itinerariosRank4);
  //   console.log("z:" + z);
  //   console.log("w:" + w);
  //   console.log("F--------------------");
  // }

  getItinerarios(): void {
    this.itinerarioService
      .getItinerarios()
      .subscribe(itinerarios => (this.itinerarios = itinerarios));
    this.rate = this.itinerario.rate_it;
  }

  ngOnInit() {
    this.getItinerarios();
    console.log(this.itinerario);
    console.log(this.itinerario.rate_it);
  }
}
