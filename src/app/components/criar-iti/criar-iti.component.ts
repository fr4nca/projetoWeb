import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router"
import { Itinerario } from '../../models/Itinerario'
import { User } from '../../models/User'
import { Local } from '../../models/Local'
import { Atividade } from '../../models/Atividade'
import { Dica } from '../../models/Dica'
import { ItinerarioService } from '../../services/itinerario.service'
import { LOCAIS } from '../../models/estados-cidades'

@Component({
  selector: 'app-criar-iti',
  templateUrl: './criar-iti.component.html',
  styleUrls: ['./criar-iti.component.css']
})

export class CriarItiComponent implements OnInit {

  locais = LOCAIS
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

  }

  addItinerario() {
    if (this.lPais == null || this.lCidade == null || this.lEstado == null || this.uNome == null || this.uEmail == null || this.iDescricao == null) {
      alert("Preencha todos os campos.")
    } else {
      let idd = 1
      this.itinerarioss.forEach((iti) => {
        idd++
      })
      this.id = idd;
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
        nome: this.iNome,
        id: this.id
      }

      this.itinerarioService.addItinerario(this.iti)
      this.route.navigate(['/idItinerario', this.id])
      this.atividades = []
      this.dicas = []
      this.aConteudo = undefined
      this.aHora = undefined
      this.dConteudo = undefined
      this.lPais = undefined
      this.lCidade = undefined
      this.lEstado = undefined
      this.uNome = undefined
      this.uEmail = undefined
      this.iDescricao = undefined
      this.iNome = undefined
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
    this.atividade = { conteudo: this.aConteudo, hora: this.aHora, dicas: [] }
    this.atividades.push(this.atividade);
  }

  addDicas() {
    this.dica = { conteudo: this.dConteudo, usuario: this.usuario }
    this.atividade.dicas.push(this.dica)
  }

}
