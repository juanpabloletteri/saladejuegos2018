import { Component, OnInit } from '@angular/core';
import { JuegoAdivina } from '../../clases/jadivina';
import { Message } from 'primeng/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { Http } from '@angular/http';
import { JugadorService } from '../../servicios/jugador.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent implements OnInit {

  nuevoJuego: JuegoAdivina = new JuegoAdivina();
  oportunidades: number = 0;
  ocultarVerificar: boolean = false;
  Mensajes: string;
  msgs: Message[] = [];

  id: number;
  apodoJugador: string;

  puntos1Base: number;
  puntos2Base: number;
  puntos3Base: number;

  puntos1Sesion: number;
  puntos2Sesion: number;
  puntos3Sesion: number;

  constructor(private miHttp: Http, private jugadorS: JugadorService) {
    this.nuevoJuego.generarnumero();
    this.nuevoJuego.numeroIngresado = 0;

    this.id = this.jugadorS.getId();
    this.apodoJugador = this.jugadorS.getApodoJugador();
    this.puntos1Base = this.jugadorS.getPuntos1Base();
    this.puntos2Base = this.jugadorS.getPuntos2Base();
    this.puntos3Base = this.jugadorS.getPuntos3Base();
    this.puntos1Sesion = this.jugadorS.getPuntos1Sesion();
    this.puntos2Sesion = this.jugadorS.getPuntos2Sesion();
    this.puntos3Sesion = this.jugadorS.getPuntos3Sesion();
  }

  ngOnInit() {
  }
  generarnumero() {
    this.nuevoJuego.generarnumero();
    this.oportunidades = 0;
  }
  verificar() {
    this.oportunidades++;
    this.ocultarVerificar = true;
    console.info("numero Secreto:", this.nuevoJuego.gano);
    if (this.nuevoJuego.verificar()) {

      //this.enviarJuego.emit(this.nuevoJuego);
      this.MostarMensaje("Sos un Genio!!!", true);
      this.nuevoJuego.numeroSecreto = 0;


      switch (this.oportunidades) {
        case 1: {
          this.jugadorS.setPuntos1Sesion(10);
          this.puntos1Sesion = this.jugadorS.getPuntos1Sesion();
          this.AgregarPuntos();
          swal(
            'Felicidades',
            'Acumulaste 10 puntos',
            'success'
          )
          break;
        }
        case 2: {
          this.jugadorS.setPuntos1Sesion(7);
          this.puntos1Sesion = this.jugadorS.getPuntos1Sesion();
          this.AgregarPuntos();
          swal(
            'Felicidades',
            'Acumulaste 7 puntos',
            'success'
          )
          break;
        }
        case 3: {
          this.jugadorS.setPuntos1Sesion(5);
          this.puntos1Sesion = this.jugadorS.getPuntos1Sesion();
          this.AgregarPuntos();
          swal(
            'Felicidades',
            'Acumulaste 5 puntos',
            'success'
          )
          break;
        }
        case 4: {
          this.jugadorS.setPuntos1Sesion(3);
          this.puntos1Sesion = this.jugadorS.getPuntos1Sesion();
          this.AgregarPuntos();
          swal(
            'Felicidades',
            'Acumulaste 3 puntos',
            'success'
          )
          break;
        }
        default: {
          this.jugadorS.setPuntos1Sesion(1);
          this.puntos1Sesion = this.jugadorS.getPuntos1Sesion();
          this.AgregarPuntos();
          swal(
            'Felicidades',
            'Acumulaste 1 punto',
            'success'
          )
          break;
        }
      }


    } else {

      let mensaje: string;
      switch (this.oportunidades) {
        case 1:
          mensaje = "No, intento fallido, animo";
          break;
        case 2:
          mensaje = "No,Te estaras Acercando???";
          break;
        case 3:
          mensaje = "No es, Yo crei que la tercera era la vencida.";
          break;
        case 4:
          mensaje = "No era el  " + this.nuevoJuego.numeroIngresado;
          break;
        case 5:
          mensaje = " intentos y nada.";
          break;
        case 6:
          mensaje = "Afortunado en el amor";
          break;

        default:
          mensaje = "Ya le erraste " + this.oportunidades + " veces";
          break;
      }
      this.MostarMensaje("#" + this.oportunidades + " " + mensaje + " ayuda :" + this.nuevoJuego.retornarAyuda());


    }
    console.info("numero Secreto:", this.nuevoJuego.gano);
  }

  MostarMensaje(mensaje: string = "este es el mensaje", ganador: boolean = false) {
    //////////////
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: this.Mensajes, detail: mensaje });
    ///////////////

    this.Mensajes = mensaje;
    var x = document.getElementById("snackbar");
    if (ganador) {
      x.className = "show Ganador";
    } else {
      x.className = "show Perdedor";
    }
    var modelo = this;
    setTimeout(function () {
      x.className = x.className.replace("show", "");
      modelo.ocultarVerificar = false;
    }, 3000);
    console.info("objeto", x);

  }
  AgregarPuntos() {
    var datos = {
      id: this.id,
      puntos1: (this.puntos1Base + this.puntos1Sesion),
      puntos2: (this.puntos2Base + this.puntos2Sesion),
      puntos3: (this.puntos3Base + this.puntos3Sesion)
    }
    this.miHttp.post('http://saladejuegos.esy.es/api/sumarPuntos', datos)
      .toPromise()
      .then(data => {
        console.log(data)
      })
  }
}
