import { Component, OnInit, Input } from '@angular/core'
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
  dUsuario: string
  usuario: User
  @Input() selectAtividade: Atividade

  constructor(private itinerarioService: ItinerarioService) { }

  ngOnInit() {
  }

  addDica(dDica){
      console.log(this.dDica)
      console.log(this.selectAtividade)
      this.dica = { conteudo: this.dDica, usuario: { nome: this.dUsuario, email: ''}}
      this.selectAtividade.dicas.push(this.dica)
  }

}
