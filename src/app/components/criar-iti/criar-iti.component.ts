import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router"
import { Itinerario } from '../../models/Itinerario'
import { MapaComponent } from '../mapa/mapa.component'
import { User } from '../../models/User'
import { Local } from '../../models/Local'
import { Atividade } from '../../models/Atividade'
import { Dica } from '../../models/Dica'
import { ItinerarioService } from '../../services/itinerario.service'

@Component({
  selector: 'app-criar-iti',
  templateUrl: './criar-iti.component.html',
  styleUrls: ['./criar-iti.component.css']
})

export class CriarItiComponent implements OnInit {

  @ViewChild(MapaComponent) alecrim: MapaComponent

  aConteudo
  aHora
  dConteudo: string
  uNome: string
  uEmail: string
  iNome: string
  iDescricao: string
  id: number

  iti: Itinerario
  atividades: Atividade[] = []
  atividade: Atividade
  dicas: Dica[] = []
  dica: Dica
  usuario: User
  local: Local
  itinerarioss: Itinerario[]

  constructor(private itinerarioService: ItinerarioService, private route: Router) {
    this.itinerarioService.getItinerarios().subscribe(iti => {
      this.itinerarioss = iti
    })
  }

  ngOnInit() {

  }

  selectId() {
    let idd = 1
    this.itinerarioss.forEach((iti) => {
      idd++
    })
    return idd
  }

  addItinerario() {
    if (this.uNome == null || this.uEmail == null || this.iDescricao == null) {
      alert("Preencha todos os campos.")
    } else {

      this.local = {
        local: this.alecrim.local.formatted_address,
        lat: this.alecrim.latitude,
        lon: this.alecrim.longitude
      }

      this.id = this.selectId();

      this.usuario = {
        nome: this.uNome,
        email: this.uEmail
      }

      this.iti = {
        atividades: this.atividades,
        usuario: this.usuario,
        descricao: this.iDescricao,
        nome: this.iNome,
        id: this.id,
        local: this.local,
        avaliacao: 0,
        likect: 0,
        rate_it: 0
      }


      this.itinerarioService.addItinerario(this.iti)
      this.route.navigate(['/itinerario', this.id])
    }
  }

  setIti(ati) {
    this.atividade = ati
  }

  selecionado(ati) {
    if (this.atividade == ati) {
      return 'lightgrey'
    } else {
      return 'white'
    }
  }

  addAtividade() {
    if (this.aHora != undefined) {
      this.atividade = { conteudo: this.aConteudo, hora: this.aHora, done: false, dicas: [] }
      this.atividades.push(this.atividade);
    } else {
      alert("Digite a hora")
    }
  }

  addDicas() {
    this.dica = { conteudo: this.dConteudo, usuario: this.usuario }
    this.atividade.dicas.push(this.dica)
  }

}
