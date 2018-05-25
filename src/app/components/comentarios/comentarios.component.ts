import { Component, OnInit, Input } from '@angular/core';
import { Comentario } from "../../models/Comentario";
import { User } from "../../models/User";
import { Itinerario } from "../../models/Itinerario";



@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  @Input() vcoment
  nUsuario: string
  descricao: string
  coment: Comentario
  usuario: User;
  vAlert = false;

  constructor() { }

  ngOnInit() {
  }

  addComentario(){
        console.log(this.vcoment)
        this.coment = {
          comentario: this.descricao,
          usuario: {nome: this.nUsuario, email: ""}
        };
        this.vcoment.push(this.coment);
  }

  getAlert(){
    if(this.nUsuario== undefined || this.descricao == undefined
    || this.nUsuario==""|| this.descricao==""){
      return true;
    }
    return false;
  }

}
