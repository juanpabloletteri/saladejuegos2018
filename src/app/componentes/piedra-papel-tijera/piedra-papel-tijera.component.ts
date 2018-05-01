import { Component, OnInit } from '@angular/core';
//import { JuegoPPT } from '../../clases/jppt';
import { Message } from 'primeng/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { JugadorService } from '../../servicios/jugador.service';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {

  //juegoDelComponente: JuegoPPT = new JuegoPPT();
  msgs: Message[] = [];

  eleccionMaquina: number = 0;
  //1 piedra 2 papel 3 tijeras
  resultado: string;
  jugadas: number = 0;
  ganadas: number = 0;
  perdidas: number = 0;
  empatadas: number = 0;
  puntaje: number = 0;

  constructor(private messageService: MessageService, private jugadorS: JugadorService) {
    //this.juegoDelComponente.generarEleccion();
    this.generarEleccion();
  }

  public apostar(eleccionJugador: number) {

    /* if (eleccionJugador == this.eleccionMaquina) {
         return 'empate';
     }
     else if (eleccionJugador == 1 && this.eleccionMaquina == 2) {
         return 'perdio';
     }
     else if (eleccionJugador == 1 && this.eleccionMaquina == 3) {
         return 'gano';
     }
     else if (eleccionJugador == 2 && this.eleccionMaquina == 3) {
         return 'perdio';
     }
     else if (eleccionJugador == 2 && this.eleccionMaquina == 1) {
         return 'gano';
     }
     else if (eleccionJugador == 3 && this.eleccionMaquina == 1) {
         return 'perdio';
     }
     else if (eleccionJugador == 3 && this.eleccionMaquina == 2) {
         return 'gano';
     }*/
    ////////////////////////////
    this.jugadas++;
    if (eleccionJugador == this.eleccionMaquina) {
      this.msgs = [];
      this.msgs.push({ severity: 'info', summary: 'Empato', detail: 'No acumula puntaje' });
      this.empatadas++;
      this.generarEleccion();
      return 'empate';
    }
    else if (eleccionJugador == 1 && this.eleccionMaquina == 2 || eleccionJugador == 2 && this.eleccionMaquina == 3 || eleccionJugador == 3 && this.eleccionMaquina == 1) {
      this.msgs = [];
      this.msgs.push({ severity: 'error', summary: 'Perdio', detail: 'Resta un punto' });
      this.perdidas++;
      this.puntaje--;
      this.generarEleccion();
      return 'perdio';
    }
    else {
      this.msgs = [];
      this.msgs.push({ severity: 'success', summary: 'Gano!!', detail: 'Felicidades, suma 1 punto' });
      this.ganadas++;
      this.puntaje++;
      this.generarEleccion();
      return 'gano';
    }

    /*
    else if (eleccionJugador == 1 && this.eleccionMaquina == 3 || eleccionJugador == 2 && this.eleccionMaquina == 1 || eleccionJugador == 3 && this.eleccionMaquina == 2) {
        return 'gano';
    }*/


  }
  generarEleccion() {
    this.eleccionMaquina = Math.floor((Math.random() * 3) + 1);
    console.info('eleccion Maquina:' + this.eleccionMaquina);

  }
  /*apostar(eleccionJugador: number) {
    this.resultado = this.juegoDelComponente.apostar(eleccionJugador);
    alert(this.resultado);
  }*/
  AgregarPuntos() {
    this.jugadorS.setPuntos2Sesion(this.puntaje);
  }
  ngOnInit() {
  }

}
