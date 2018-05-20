import { Component, OnInit, Input } from "@angular/core";
import { RouterModule, Routes, ActivatedRoute } from "@angular/router";
import { ItinerarioService } from "../../services/itinerario.service";
import { Itinerario } from "../../models/Itinerario";
import { Atividade } from "../../models/Atividade";

@Component({
  selector: "app-id-itinerario",
  templateUrl: "./id-itinerario.component.html",
  styleUrls: ["./id-itinerario.component.css"]
})
export class IdItinerarioComponent implements OnInit {
  id;
  itinerarios: Itinerario[] = [];
  itinerario: Itinerario;
  selectAtividade;
  rate;
  vclick = false;
  porcent = 0;
  itiLocal;
  atividade;
  selectedDia = undefined;

  constructor(
    private itinerarioService: ItinerarioService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params.id;
    this.itinerarioService
      .getItinerarios()
      .subscribe(iti => (this.itinerarios = iti));
    this.itinerarios.forEach(iti => {
      if (iti.id == this.id) {
        this.itinerario = iti;
      }
    });
    this.rate = this.itinerario.rate_it;
  }

  ngOnInit() {}

  setIti(ati) {
    this.atividade = ati;
  }

  selecionado(ati) {
    if (this.atividade == ati) {
      return "lightgrey";
    } else {
      return "white";
    }
  }

  onNewAtividade(ativ) {
    this.selectAtividade = ativ;
    this.itinerarioService.updateItis(this.itinerarios);
  }

  onSelect(A) {
    this.selectAtividade = A;
  }

  rating_porcent() {
    this.porcent = this.itinerario.likect / this.itinerario.avaliacao;
    if (this.porcent <= 0.2) {
      this.rate = 1;
    } else if (this.porcent > 0.2 && this.porcent <= 0.4) {
      this.rate = 2;
    } else if (this.porcent > 0.4 && this.porcent <= 0.6) {
      this.rate = 3;
    } else if (this.porcent > 0.6 && this.porcent <= 0.8) {
      this.rate = 4;
    } else if (this.porcent > 0.8) {
      this.rate = 5;
    }

    this.itinerario.rate_it = this.rate;
    this.itinerarioService.updateItis(this.itinerarios);
  }

  selectDia(dia) {
    this.selectedDia = dia;
  }

  like() {
    this.vclick = true;
    this.itinerario.likect += 1;
    this.itinerario.avaliacao += 1;
    this.itinerarioService.updateItis(this.itinerarios);
    this.rating_porcent();
  }

  dislike() {
    this.vclick = true;
    this.itinerario.avaliacao += 1;
    this.itinerarioService.updateItis(this.itinerarios);
    this.rating_porcent();
  }

  done(ativ) {
    ativ.done = !ativ.done;
    this.itinerarioService.updateItis(this.itinerarios);
  }
}
