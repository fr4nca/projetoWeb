import { Component, OnInit } from '@angular/core'
import { Itinerario } from '../../models/Itinerario'
import { User } from '../../models/User'
import { Atividade } from '../../models/Atividade'
import { Dica } from '../../models/Dica'
import { ItinerarioService } from '../../services/itinerario.service'

@Component({
  selector: 'app-inserir-dicas',
  templateUrl: './inserir-dicas.component.html',
  styleUrls: ['./inserir-dicas.component.css']
})

export class InserirDicasComponent implements OnInit {

  dicas: Dica[] = []
  dica: Dica
  dDica: string
  usuario: User
  atividade

  constructor() { }

  ngOnInit() {
  }

  addDica(dDica){
    console.log(this.dDica)
    this.dica = { conteudo: this.dDica, usuario: this.usuario }
    this.atividade.dicas.push(this.dica)
  }

}
