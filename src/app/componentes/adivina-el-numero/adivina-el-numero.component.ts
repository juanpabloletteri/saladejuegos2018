import { Component, OnInit } from '@angular/core';
import { JuegoAdivina } from '../../clases/jadivina';

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

  constructor() {
    this.nuevoJuego.generarnumero();
    this.nuevoJuego.numeroIngresado = 0;
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
}
