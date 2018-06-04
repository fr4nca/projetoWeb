import { Component, OnInit, Input} from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from "@angular/router";
import { Itinerario } from "../../models/Itinerario";
import { Local } from "../../models/Local";
import { ItinerarioService } from "../../services/itinerario.service";
import {} from "googlemaps";
import { MapsAPILoader } from "@agm/core";

@Component({
  selector: 'app-pesq-local',
  templateUrl: './pesq-local.component.html',
  styleUrls: ['./pesq-local.component.css']
})
export class PesqLocalComponent implements OnInit {

  pesqIti: Itinerario[];
  pItinerario: Itinerario[];
  pesqCity;
  pLocal
  pesqLocal
  arrayLocais: string[]=[];

  constructor(private itiService: ItinerarioService, private mapsAPILoader: MapsAPILoader) {

  }

  ngOnInit() {
  }

  pesquisarCidade(city){
    this.pesqCity = city;
    this.pItinerario=[];
    this.arrayLocais=[];
    this.pLocal=false;

    this.itiService.getItinerarios().subscribe(itinera => { this.pesqIti = itinera;

      for(var i=0; i<this.pesqIti.length; i++){
        this.arrayLocais.push(this.pesqIti[i].local.local);
        if(this.pesqIti[i].local.local.includes(this.pesqCity)){
          this.pItinerario.push(this.pesqIti[i]);
          this.pLocal = true
        }
      }
    });
    if(this.pLocal){
      this.pesqLocal=true;
    }else{
      this.pesqLocal= false;
    }
  }
}
