import { Component, OnInit } from '@angular/core';
import { Itinerario } from '../../models/Itinerario'
import { User } from '../../models/User'
import { Local } from '../../models/Locall'
import { Atividade } from '../../models/Atividade'
import { Dica } from '../../models/Dica';


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
  
  dicas: Dica[]
  atividade: Atividade
  dica: Dica
  usuario: User = { nome: 'Victor', email: "alecrim@asdasd" }
  local: Local = { pais: "Brasil", cidade: "Brasília", estado: "DF" }
  atividades: Atividade[] = [
    {
      conteudo: "Lanchar",
      hora: "23:15",
      dicas: [{
        conteudo: "Alecrim",
        usuario: this.usuario
      }]
    }, {
      conteudo: "Dormir",
      hora: "22:00",
      dicas: [{
        conteudo: "Alecrim",
        usuario: this.usuario
      }]
    }
  ]

  iti: Itinerario = {
    atividades: this.atividades,
    local: this.local,
    usuario: this.usuario,
    descricao: this.iDescricao,
    nome: this.iNome
  }
  
  constructor() { }

  ngOnInit() {
  }

  setIti(ati) {
    this.atividade = ati
  }
  selecionado(ati){
    if(this.atividade == ati){
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
