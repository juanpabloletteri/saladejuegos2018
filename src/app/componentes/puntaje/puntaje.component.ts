import { Component, OnInit } from '@angular/core';
import { JugadorService } from '../../servicios/jugador.service';
import { Jugador } from '../../clases/jugador';

@Component({
  selector: 'app-puntaje',
  templateUrl: './puntaje.component.html',
  styleUrls: ['./puntaje.component.css']
})
export class PuntajeComponent implements OnInit {


  puntos1: number;
  puntos2: number;

  constructor(private jugadorS: JugadorService) {

  }

  ngOnInit() {
    console.log('puntos 2:' + this.jugadorS.getPuntos2Base())
    console.log(this.jugadorS.getPuntos1Base());
    this.puntos1 = this.jugadorS.getPuntos1Base();
  }

}
