import { Injectable } from '@angular/core';
import { Jugador } from '../clases/jugador';

@Injectable()
export class JugadorService {

  //jugador: Jugador = new Jugador();

  constructor(private jugador: Jugador) { }

  setId(id) {
    this.jugador.id = id;
  }
  setNombre(nombre) {
    this.jugador.nombre = nombre;
  }
  setApellido(apellido) {
    this.jugador.apellido = apellido;
  }
  setMail(mail) {
    this.jugador.mail = mail;
  }
  setApodoJugador(apodoJugador) {
    this.jugador.apodoJugador = apodoJugador;
  }
  setPuntos1Base(puntos) {
    this.jugador.puntos1base = puntos;
  }
  setPuntos1Sesion(puntos) {
    this.jugador.puntos1sesion = this.jugador.puntos1sesion + puntos;
  }
  setPuntos2Base(puntos) {
    this.jugador.puntos2base = puntos;
  }
  setPuntos2Sesion(puntos) {
    this.jugador.puntos2sesion = this.jugador.puntos2sesion + puntos;
  }
  setPuntos3Base(puntos) {
    this.jugador.puntos3base = puntos;
  }
  setPuntos3Sesion(puntos) {
    this.jugador.puntos3sesion = this.jugador.puntos3sesion + puntos;
  }
  /////////////////////////
  getId() {
    return this.jugador.id;
  }
  getNombre() {
    return this.jugador.nombre;
  }
  getApellido() {
    return this.jugador.apellido;
  }
  getMail() {
    return this.jugador.mail;
  }
  getApodoJugador() {
    return this.jugador.apodoJugador;
  }
  getPuntos1Base() {
    return this.jugador.puntos1base;
  }
  getPuntos1Sesion() {
    return this.jugador.puntos1sesion;
  }
  getPuntos2Base() {
    return this.jugador.puntos2base;
  }
  getPuntos2Sesion() {
    return this.jugador.puntos2sesion;
  }
  getPuntos3Base() {
    return this.jugador.puntos3base;
  }
  getPuntos3Sesion() {
    return this.jugador.puntos3sesion;
  }
}
