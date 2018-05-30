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
  id
  @Input() vcoment
  nUsuario: string
  descricao: string
  coment: Comentario
  usuario: User;
  vAlert = false;
  itinerario: Itinerario;

  constructor(
    private itinerarioService: ItinerarioService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.getIti();
  }

  getIti() {
    this.itinerarioService.getItinerario(this.id).subscribe(iti => {
      this.itinerario = iti;
      this.vcoment = this.itinerario.comentarios;
    });
  }

  addComentario(){
        console.log(this.vcoment)
        this.coment = {
          comentario: this.descricao,
          usuario: {nome: this.nUsuario, email: ""}
        };
        this.vcoment.push(this.coment);
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
