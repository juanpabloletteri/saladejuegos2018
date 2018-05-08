import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpServiceService } from './servicios/http-service.service';
import { JugadorService } from './servicios/jugador.service';
import { Jugador } from './clases/jugador';

import { PrimengModule } from './modulos/primeng/primeng.module'

import { AppComponent } from './app.component';

import { RouterModule, Route, Routes } from '@angular/router';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { PiedraPapelTijeraComponent } from './componentes/piedra-papel-tijera/piedra-papel-tijera.component';
import { Juego3Component } from './componentes/juego3/juego3.component';
import { ErrorComponent } from './componentes/error/error.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { PuntajeComponent } from './componentes/puntaje/puntaje.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { MenuComponent } from './componentes/menu/menu.component';

const config: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'adivina',
    component: AdivinaElNumeroComponent
  },
  {
    path: 'ppt',
    component: PiedraPapelTijeraComponent
  },
  {
    path: 'trivia',
    component: Juego3Component
  },
  {
    path: 'puntaje',
    component: PuntajeComponent
  },
  {
    path: 'acercade',
    component: AcercadeComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    AdivinaElNumeroComponent,
    PiedraPapelTijeraComponent,
    Juego3Component,
    ErrorComponent,
    LoginComponent,
    HomeComponent,
    PuntajeComponent,
    AcercadeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PrimengModule,
    RouterModule.forRoot(config)
  ],
  providers: [HttpServiceService, JugadorService, Jugador],
  bootstrap: [AppComponent]
})
export class AppModule { }
