import { Component, OnInit } from '@angular/core';
import { JugadorService } from '../../servicios/jugador.service';
import { Http } from '@angular/http';
@Component({
  selector: 'app-puntaje',
  templateUrl: './puntaje.component.html',
  styleUrls: ['./puntaje.component.css']
})
export class PuntajeComponent implements OnInit {

  apodoJugador: string;

  puntos1Base: number;
  puntos2Base: number;
  puntos3Base: number;

  puntos1Sesion: number;
  puntos2Sesion: number;
  puntos3Sesion: number;

  jugadores: any;
  cols: any = [""];
  
  constructor(private jugadorS: JugadorService, public mihttp: Http) {
    this.mihttp.get('http://saladejuegos.esy.es/api/traerTodosLosUsuarios')
      .toPromise()
      .then(data => {
        this.jugadores = data.json();
        console.log(data);
      })
  }

  ngOnInit() {
    this.apodoJugador = this.jugadorS.getApodoJugador();
    this.puntos1Base = this.jugadorS.getPuntos1Base();
    this.puntos2Base = this.jugadorS.getPuntos2Base();
    this.puntos3Base = this.jugadorS.getPuntos3Base();
    this.puntos1Sesion = this.jugadorS.getPuntos1Sesion();
    this.puntos2Sesion = this.jugadorS.getPuntos2Sesion();
    this.puntos3Sesion = this.jugadorS.getPuntos3Sesion();
  }
  SumarPuntos() {
    var datos: any;

    datos = { id: 5, puntos1: 11, puntos2: 22, puntos3: 33 }

    this.mihttp.post('http://saladejuegos.esy.es/api/sumarPuntos', datos)
      .subscribe(data => {
        console.log(data);
        return data;
      })
  }
}
