import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { ItinerarioService } from '../../services/itinerario.service'
import { Itinerario } from '../../models/Itinerario'
import { Atividade } from '../../models/Atividade'

@Component({
  selector: 'app-id-itinerario',
  templateUrl: './id-itinerario.component.html',
  styleUrls: ['./id-itinerario.component.css']
})

export class IdItinerarioComponent implements OnInit {

  id
  itinerarios: Itinerario[] = []
  itinerario: Itinerario
  selectAtividade

  constructor(private itinerarioService: ItinerarioService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id
    this.itinerarioService.getItinerarios().subscribe(iti => this.itinerarios = iti)
    this.itinerarios.forEach(iti => {
      if (iti.id == this.id) {
        this.itinerario = iti
      }
    })
  }

  ngOnInit() {
  }

  onSelect(atividade: Atividade){
    this.selectAtividade;
  }

}
