import { Injectable } from '@angular/core';

@Injectable()
export class JugadorService {

  id: number;
  nombre: string;
  apellido: string;
  mail: string;
  apodoJugador: string;
  puntos1base: number;
  puntos1sesion: number;
  puntos2base: number;
  puntos2sesion: number;
  puntos3base: number;
  puntos3sesion: number;

  constructor() { }

  setId(id){
    this.id = id;
  }
  setNombre(nombre){
    this.nombre = nombre;
  }
  setApellido(apellido){
    this.apellido = apellido;
  }
  setMail(mail){
    this.mail = mail;
  }
  setApodoJugador(apodoJugador){
    this.apodoJugador = apodoJugador;
  }
  setPuntosBase1(puntos1base){
    this.puntos1base = puntos1base;
  }
  setPuntosBase2(puntos2base){
    this.puntos2base = puntos2base;
  }
  setPuntosBase3(puntos3base){
    this.puntos3base = puntos3base;
  }
  /////////////////////////
  getApodoJugador(){
    return this.apodoJugador;
  }
}
