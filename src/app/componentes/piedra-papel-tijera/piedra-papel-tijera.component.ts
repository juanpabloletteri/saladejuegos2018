import { Component, OnInit } from '@angular/core';
import { JuegoPPT } from '../../clases/jppt';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {

  juegoDelComponente: JuegoPPT = new JuegoPPT();
  eleccionJugador: number;
  resultado: string;
  constructor() {
    this.juegoDelComponente.generarEleccion();
  }

  apostar() {
    this.resultado = this.juegoDelComponente.apostar(this.eleccionJugador);
    console.log(this.resultado);
  }

  ngOnInit() {
  }

}
