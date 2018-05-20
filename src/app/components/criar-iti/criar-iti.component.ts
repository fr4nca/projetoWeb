import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Itinerario } from "../../models/Itinerario";
import { MapaComponent } from "../mapa/mapa.component";
import { User } from "../../models/User";
import { Local } from "../../models/Local";
import { Atividade } from "../../models/Atividade";
import { Dia } from "../../models/Dia";

import { Dica } from "../../models/Dica";
import { ItinerarioService } from "../../services/itinerario.service";
import { IMyDpOptions } from "mydatepicker";

@Component({
  selector: "app-criar-iti",
  templateUrl: "./criar-iti.component.html",
  styleUrls: ["./criar-iti.component.css"]
})
export class CriarItiComponent implements OnInit {
  datePickerOptions = {
    dateFormat: "dd.mm.yyyy",
    firstDayOfWeek: "mo",
    sunHighlight: true,
    height: "34px",
    width: "260px",
    inline: false,
    alignSelectorRight: false,
    indicateInvalidDateRange: true
  };

  @ViewChild(MapaComponent) alecrim: MapaComponent;

  dData;
  iDia;
  aConteudo;
  aHora;
  dConteudo: string;
  uNome: string;
  uEmail: string;
  iNome: string;
  iDescricao: string;
  id: number;

  iti: Itinerario;
  dias: Dia[] = [];
  atividades: Atividade[] = [];
  atividade: Atividade;
  dicas: Dica[] = [];
  dica: Dica;
  usuario: User;
  local: Local;
  itinerarioss: Itinerario[];

  constructor(
    private itinerarioService: ItinerarioService,
    private route: Router
  ) {
    this.itinerarioService.getItinerarios().subscribe(iti => {
      this.itinerarioss = iti;
    });
  }

  ngOnInit() {}

  selectId() {
    let idd = 1;
    this.itinerarioss.forEach(iti => {
      idd++;
    });
    return idd;
  }

  addDia() {
    this.iDia = {
      dia: this.dias.length + 1,
      data: this.dData.formatted,
      atividades: this.atividades
    };
    this.atividades = [];
    this.dicas = [];
    this.dias.push(this.iDia);
  }

  addItinerario() {
    if (this.uNome == null || this.uEmail == null || this.iDescricao == null) {
      alert("Preencha todos os campos.");
    } else {
      this.local = {
        local: this.alecrim.local.formatted_address,
        lat: this.alecrim.latitude,
        lon: this.alecrim.longitude
      };

      this.id = this.selectId();

      this.usuario = {
        nome: this.uNome,
        email: this.uEmail
      };

      this.iti = {
        dias: this.dias,
        usuario: this.usuario,
        descricao: this.iDescricao,
        nome: this.iNome,
        id: this.id,
        local: this.local,
        avaliacao: 0,
        likect: 0,
        rate_it: 0
      };

      console.log(this.iti);

      this.itinerarioService.addItinerario(this.iti);
      this.route.navigate(["/itinerario", this.id]);
    }
  }

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

  addAtividade() {
    if (this.aHora != undefined) {
      this.atividade = {
        conteudo: this.aConteudo,
        hora: this.aHora,
        done: false,
        dicas: []
      };
      this.atividades.push(this.atividade);
    } else {
      alert("Digite a hora");
    }
  }

  addDicas() {
    this.dica = { conteudo: this.dConteudo, usuario: this.usuario };
    this.atividade.dicas.push(this.dica);
  }
}
