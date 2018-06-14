import { Component, OnInit, Input } from "@angular/core";
import { RouterModule, Routes, ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { ItinerarioService } from "../../services/itinerario.service";

import { Itinerario } from "../../models/Itinerario";
import { Atividade } from "../../models/Atividade";
import { Dica } from "../../models/Dica";
import { User } from "../../models/User";
import { Local } from "../../models/Local";
import { Dia } from "../../models/Dia";


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  itinerario;
  itinerarios: Itinerario[] = [];
  selectAtividade;
  vclick = false;
  z;
  id;
  dData;
  selectedDia;
  iDia;
  aConteudo;
  aHora;

  dConteudo: string;
  uNome: string;
  uEmail: string;
  iNome: string;
  iDescricao: string;

  iti: Itinerario;
  dias: Dia[] = [];
  atividades: Atividade[] = [];
  atividade: Atividade;
  dicas: Dica[] = [];
  dica: Dica;
  usuario: User;
  local: Local;
  itinerarioss: Itinerario[];


  constructor(private itinerarioService: ItinerarioService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.getIti();
  }


  getIti() {
    this.itinerarioService.getItinerario(this.id).subscribe(iti => {
      this.itinerario = iti;
    });
  }

  setIti(ati) {
    this.atividade = ati;
  }

  done(ativ) {
    ativ.done = !ativ.done;
    this.itinerarioService.updateIti(this.itinerario).subscribe(data => data);
  }

  selectDia(dia) {
    this.selectedDia = dia;
  }

  onNewAtividade(ativ) {
    this.selectAtividade = ativ;
    this.itinerarioService.updateIti(this.itinerario).subscribe(data => data);
  }

  onSelect(A) {
    this.selectAtividade = A;
  }

  selecionado(ati) {
    if (this.atividade == ati) {
      return "lightgrey";
    } else {
      return "white";
    }
  }

  addDia() {
    this.iDia = {
      dia: this.itinerario.dias.length + 1,
      data: this.dData.formatted,
      atividades: this.atividades
    };
    this.atividades = [];
    this.dicas = [];
    this.dData = null;
    this.selectedDia = this.iDia;
    this.itinerario.dias.push(this.iDia);
  }

  concluirDia() {
    this.atividades = [];
    this.dicas = [];
    this.aConteudo = "";
    this.aHora = "";
    this.dConteudo = "";
    this.dData = null;
    this.selectedDia = null;
  }

  addAtividade() {
    if (this.aHora != undefined) {
      this.atividade = {
        conteudo: this.aConteudo,
        hora: this.aHora,
        done: false,
        dicas: []
      };
      this.selectedDia.atividades.push(this.atividade);
    } else {
      alert("Digite a hora");
    }
  }


  addItinerario() {
    if (this.uNome == null || this.uEmail == null || this.iNome == null){
      alert("Preencha todos os campos.");
    } else {

      this.usuario = {
        nome: this.uNome,
        email: this.uEmail
      };

      this.local = {
        local: this.itinerario.local.formatted_address,
        lat: this.itinerario.latitude,
        lon: this.itinerario.longitude,
        id: this.itinerario.local.place_id
      };

      this.iti = {
        comentarios: [],
        dias: this.itinerario.dias,
        usuario: this.usuario,
        descricao: this.itinerario.descricao,
        nome: this.iNome,
        local: this.itinerario.local,
        avaliacao: 0,
        likect: 0,
        rate_it: 0
      };

      this.dica = { conteudo: this.itinerario.conteudo,
         usuario: this.itinerario.usuario
      };

      this.itinerarioService.addItinerario(this.iti).subscribe(data => {
        this.router.navigate(["/itinerario", data]);
      });
    }
  }
}
