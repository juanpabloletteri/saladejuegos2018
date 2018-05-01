import { Component, OnInit } from '@angular/core';
import { JuegoPPT } from '../../clases/jppt';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {

  juegoDelComponente: JuegoPPT = new JuegoPPT();

  resultado: string;
  constructor() {
    this.juegoDelComponente.generarEleccion();
  }

  apostar(eleccionJugador: number) {
    this.resultado = this.juegoDelComponente.apostar(eleccionJugador);
    alert(this.resultado);
  }

  ngOnInit() {
  }

}
