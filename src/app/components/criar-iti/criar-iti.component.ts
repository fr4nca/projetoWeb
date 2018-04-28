import { Component, OnInit } from '@angular/core';
import { Itinerario } from '../../models/Itinerario'
import { User } from '../../models/User'
import { Local } from '../../models/Locall'
import { Atividade } from '../../models/Atividade'
import { Dica } from '../../models/Dica';
import { ItinerarioService } from '../../services/itinerario.service';


@Component({
  selector: 'app-criar-iti',
  templateUrl: './criar-iti.component.html',
  styleUrls: ['./criar-iti.component.css']
})
export class CriarItiComponent implements OnInit {

  aConteudo
  aHora
  dConteudo: string
  lPais
  lEstado
  lCidade
  uNome: string
  uEmail: string
  iNome: string
  iDescricao: string

  iti: Itinerario
  atividades: Atividade[] = []
  atividade: Atividade
  dicas: Dica[] = []
  dica: Dica
  usuario: User
  local: Local

  itinerarios: Itinerario[] = this.itinerarioService.getItinerarios()

  constructor(private itinerarioService: ItinerarioService) { }

  ngOnInit() {
  }

  addItinerario() {
    this.local = {
      pais: this.lPais,
      cidade: this.lCidade,
      estado: this.lEstado
    }
    this.usuario = {
      nome: this.uNome,
      email: this.uEmail
    }
    this.iti = {
      atividades: this.atividades,
      local: this.local,
      usuario: this.usuario,
      descricao: this.iDescricao,
      nome: this.iNome
    }
    this.itinerarioService.addItinerario(this.iti)
    this.atividades = []
    this.dicas = []
    this.aConteudo = ''
    this.aHora = ''
    this.dConteudo = ''
    this.lPais = ''
    this.lCidade = ''
    this.lEstado = ''
    this.uNome = ''
    this.uEmail = ''
    this.iDescricao = ''
    this.iNome = ''
  }

  setIti(ati) {
    this.atividade = ati
  }

  selecionado(ati) {
    if (this.atividade == ati) {
      return 'green'
    } else {
      return 'white'
    }
  }

  addAtividade() {
    this.atividade = { conteudo: this.aConteudo, hora: this.aHora, dicas: [] }
    this.atividades.push(this.atividade);
  }

  addDicas() {
    this.dica = { conteudo: this.dConteudo, usuario: this.usuario }
    this.atividade.dicas.push(this.dica)
  }

}
