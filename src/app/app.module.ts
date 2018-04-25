import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { RouterModule, Route, Routes } from '@angular/router';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { PiedraPapelTijeraComponent } from './componentes/piedra-papel-tijera/piedra-papel-tijera.component';
import { Juego3Component } from './componentes/juego3/juego3.component';
import { ErrorComponent } from './componentes/error/error.component';

const config: Routes = [
  {
    path: 'adivina',
    component: AdivinaElNumeroComponent
  },
  {
    path: 'ppt',
    component: PiedraPapelTijeraComponent
  },
  {
    path: 'juego3',
    component: Juego3Component
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
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
