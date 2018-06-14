import { Component, OnInit, Input } from '@angular/core';
import { Comentario } from "../../models/Comentario";
import { User } from "../../models/User";
import { Itinerario } from "../../models/Itinerario";
import { ItinerarioService } from "../../services/itinerario.service";
import { RouterModule, Routes, ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  @Input() itinerario
  nUsuario: string
  descricao: string
  coment: Comentario
  usuario: User;
  vAlert = false;

  constructor(
    private itinerarioService: ItinerarioService
  ) { }

  ngOnInit() {
  }

  addComentario(){
        this.coment = {
          comentario: this.descricao,
          usuario: {nome: this.nUsuario, email: ""}
        };
        this.itinerario.comentarios.push(this.coment);
        this.itinerarioService.updateIti(this.itinerario).subscribe(data => data);
  }

  getAlert(){
    if(this.nUsuario== undefined || this.descricao == undefined
    || this.nUsuario==""|| this.descricao==""){
      return true;
    }
    return false;
  }

}
