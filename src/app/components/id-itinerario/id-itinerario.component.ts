import { Component, OnInit, Input } from "@angular/core";
import { RouterModule, Routes, ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { ItinerarioService } from "../../services/itinerario.service";
import { Itinerario } from "../../models/Itinerario";
import { Atividade } from "../../models/Atividade";

@Component({
  selector: "app-id-itinerario",
  templateUrl: "./id-itinerario.component.html",
  styleUrls: ["./id-itinerario.component.css"]
})
export class IdItinerarioComponent implements OnInit {
  id;
  x;
  itinerarios: Itinerario[] = [];
  itinerario: Itinerario;
  selectAtividade;
  rate;
  vclick = false;
  porcent = 0;
  itiLocal;
  atividade;
  selectedDia = undefined;
  photos;
  fotos = [];

  constructor(
    private itinerarioService: ItinerarioService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.getIti();
  }

  getVar(){
    this.x = this.route.snapshot.params.id;
    return this.x;
    //console.log("getVar: "+ this.x);
  }


  getIti() {
    this.itinerarioService.getItinerario(this.id).subscribe(iti => {
      this.itinerario = iti;
      this.getPhotos();
      this.rate = this.itinerario.rate_it;
    });
  }

  getPhotos() {
    this.itinerarioService
      .getPhotos(this.itinerario.local.id)
      .subscribe(data => {
        this.photos = data;
        this.fotos = this.photos.map(photo => photo.photo_reference);
      });
  }

  setIti(ati) {
    this.atividade = ati;
  }

  selecionado(ati) {
    if (this.atividade == ati) {
      return "lightgrey";
    } else {
      return "white";
    }
  }

  onNewAtividade(ativ) {
    this.selectAtividade = ativ;
    this.itinerarioService.updateIti(this.itinerario).subscribe(data => data);
  }

  onSelect(A) {
    this.selectAtividade = A;
  }

  rating_porcent() {
    this.porcent = this.itinerario.likect / this.itinerario.avaliacao;
    if (this.porcent <= 0.2) {
      this.rate = 1;
    } else if (this.porcent > 0.2 && this.porcent <= 0.4) {
      this.rate = 2;
    } else if (this.porcent > 0.4 && this.porcent <= 0.6) {
      this.rate = 3;
    } else if (this.porcent > 0.6 && this.porcent <= 0.8) {
      this.rate = 4;
    } else if (this.porcent > 0.8) {
      this.rate = 5;
    }

    this.itinerario.rate_it = this.rate;
    this.itinerarioService.updateIti(this.itinerario).subscribe(data => data);
  }

  selectDia(dia) {
    this.selectedDia = dia;
  }

  like() {
    this.vclick = true;
    this.itinerario.likect += 1;
    this.itinerario.avaliacao += 1;
    this.itinerarioService.updateIti(this.itinerario).subscribe(data => data);

    this.rating_porcent();
  }

  dislike() {
    this.vclick = true;
    this.itinerario.avaliacao += 1;
    this.itinerarioService.updateIti(this.itinerario).subscribe(data => data);

    this.rating_porcent();
  }

  done(ativ) {
    ativ.done = !ativ.done;
    this.itinerarioService.updateIti(this.itinerario).subscribe(data => data);
  }
}
