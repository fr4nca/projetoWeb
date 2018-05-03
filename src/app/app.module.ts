import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AgmCoreModule } from '@agm/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IndexComponent } from './components/index/index.component';
import { CriarItiComponent } from './components/criar-iti/criar-iti.component';
import { ItinerarioService } from './services/itinerario.service';
import { ItinerarioComponent } from './components/itinerario/itinerario.component';
import { IdItinerarioComponent } from './components/id-itinerario/id-itinerario.component';
import { InserirDicasComponent } from './inserir-dicas/inserir-dicas.component'
import { MapaComponent } from './components/mapa/mapa.component'


const appRoutes: Routes = [
  { path: 'itinerario/:id', component: IdItinerarioComponent },
  { path: 'itinerario', component: ItinerarioComponent },
  { path: 'criar', component: CriarItiComponent },
  { path: '', component: IndexComponent },
  { path: 'mapa', component: MapaComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    CriarItiComponent,
    ItinerarioComponent,
    IdItinerarioComponent,
    InserirDicasComponent,
    MapaComponent

  ],
  imports: [
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDzBOpN38p3ULocMvu5ykvWsRDr-1LYHls",
      libraries: ["places"]
    }),
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ItinerarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
