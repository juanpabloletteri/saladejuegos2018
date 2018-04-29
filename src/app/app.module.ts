import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpServiceService } from './servicios/http-service.service';

import { PrimengModule } from './modulos/primeng/primeng.module'

import { AppComponent } from './app.component';

import { RouterModule, Route, Routes } from '@angular/router';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { PiedraPapelTijeraComponent } from './componentes/piedra-papel-tijera/piedra-papel-tijera.component';
import { Juego3Component } from './componentes/juego3/juego3.component';
import { ErrorComponent } from './componentes/error/error.component';
import { LoginComponent } from './componentes/login/login.component';

const config: Routes = [
  {
    path: 'login',
    component: LoginComponent
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
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PrimengModule,
    RouterModule.forRoot(config)
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
