import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IndexComponent } from './components/index/index.component';
import { CriarItiComponent } from './components/criar-iti/criar-iti.component';
import { ItinerarioService } from './services/itinerario.service';

const appRoutes: Routes = [
  { path: 'criar', component: CriarItiComponent },
  { path: '', component: IndexComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    CriarItiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ItinerarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
