import { Component, OnInit } from '@angular/core';
//import { JuegoPPT } from '../../clases/jppt';
import { Message } from 'primeng/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { JugadorService } from '../../servicios/jugador.service';
import { Http } from '@angular/http';

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
  id: number;
  apodoJugador: string;

  puntos1Base: number;
  puntos2Base: number;
  puntos3Base: number;

  puntos1Sesion: number;
  puntos2Sesion: number;
  puntos3Sesion: number;

  resultado: string;
  jugadas: number = 0;
  ganadas: number = 0;
  perdidas: number = 0;
  empatadas: number = 0;
  puntaje: number = 0;

  constructor(private messageService: MessageService, private jugadorS: JugadorService, private miHttp: Http) {
    //this.juegoDelComponente.generarEleccion();
    this.generarEleccion();
    this.id = this.jugadorS.getId();
    this.apodoJugador = this.jugadorS.getApodoJugador();
    this.puntos1Base = this.jugadorS.getPuntos1Base();
    this.puntos2Base = this.jugadorS.getPuntos2Base();
    this.puntos3Base = this.jugadorS.getPuntos3Base();
    this.puntos1Sesion = this.jugadorS.getPuntos1Sesion();
    this.puntos2Sesion = this.jugadorS.getPuntos2Sesion();
    this.puntos3Sesion = this.jugadorS.getPuntos3Sesion();
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
      // this.jugadorS.setPuntos2Sesion(this.puntaje);
      return 'empate';
    }
    else if (eleccionJugador == 1 && this.eleccionMaquina == 2 || eleccionJugador == 2 && this.eleccionMaquina == 3 || eleccionJugador == 3 && this.eleccionMaquina == 1) {
      this.msgs = [];
      this.msgs.push({ severity: 'error', summary: 'Perdio', detail: 'Resta un punto' });
      this.perdidas++;
      this.puntaje--;
      this.generarEleccion();
      this.jugadorS.setPuntos2Sesion(-1);
      this.puntos2Sesion=this.jugadorS.getPuntos2Sesion();
      this.AgregarPuntos();
      return 'perdio';
    }
    else {
      this.msgs = [];
      this.msgs.push({ severity: 'success', summary: 'Gano!!', detail: 'Felicidades, suma 1 punto' });
      this.ganadas++;
      this.puntaje++;
      this.generarEleccion();
      this.jugadorS.setPuntos2Sesion(1);
      this.puntos2Sesion=this.jugadorS.getPuntos2Sesion();
      console.log(this.puntos2Base);
      console.log("-------");
      console.log(this.puntos2Sesion);
      this.AgregarPuntos();
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
    var datos = {
      id: this.id,
      puntos1: (this.puntos1Base + this.puntos1Sesion),
      puntos2: (this.puntos2Base + this.puntos2Sesion),
      puntos3: (this.puntos3Base + this.puntos3Sesion)
    }
    this.miHttp.post('http://localhost/api/sumarPuntos', datos)
    .toPromise()
    .then(data=>{
      console.log(data)
    })
  }
  ngOnInit() {
  }

}
