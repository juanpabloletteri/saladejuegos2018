import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { JugadorService } from '../../servicios/jugador.service';
import { RouterModule, Route, Routes, Router } from '@angular/router';
import { Http } from '@angular/http';
import swal from 'sweetalert2';

@Component({
  selector: 'app-juego3',
  templateUrl: './juego3.component.html',
  styleUrls: ['./juego3.component.css']
})
export class Juego3Component implements OnInit {

  id: number;
  apodoJugador: string;

  puntos1Base: number;
  puntos2Base: number;
  puntos3Base: number;

  puntos1Sesion: number;
  puntos2Sesion: number;
  puntos3Sesion: number;

  preg1: number = 1;
  preg2: number = 1;
  preg3: number = 1;
  preg4: number = 1;
  preg5: number = 1;
  preg6: number = 1;
  preg7: number = 1;
  preg8: number = 1;
  preg9: number = 1;
  preg10: number = 1;

  puntaje: number = 0;

  constructor(private jugadorS: JugadorService, public rute: Router, public miHttp: Http, ) {
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
  Enviar() {
    this.puntaje = 0;
    this.Calcular()
    ///////SWEET ALERT///////
    swal({
      title: 'Desea enviar respuestas?',
      text: "Usted ha acumulado" + this.puntaje + " respuestas correctas",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, enviar!',
      cancelButtonText: 'No, cancelar!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        console.log(this.puntaje)
        this.jugadorS.setPuntos3Sesion(this.puntos3Sesion);
        /////////////////////////
        this.AgregarPuntos();
        /////////////////////
        swal(
          'Aceptar!',
          'Trivia finalizada...',
          'success'
        )
        this.rute.navigate(['puntaje']);
      } else if (
        // Read more about handling dismissals
        result.dismiss === swal.DismissReason.cancel
      ) {
        swal(
          'Arrugaste...',
          'Volviendo a la Trivia :(',
          'error'
        )
      }
    })
    ////////////////
  }

  Calcular() {
    var preguntas: number[] = [this.preg1, this.preg2, this.preg3, this.preg4, this.preg5, this.preg6, this.preg7, this.preg8, this.preg9, this.preg10];
    for (let i of preguntas) {
      //console.log("valor" + i)
      if (i == 0) {
        this.puntaje++;
      }
    }
    this.puntos3Sesion = this.puntaje;
    console.log("----------");
    console.log(this.puntaje);
  }

  AgregarPuntos() {
    var datos = {
      id: this.id,
      puntos1: (this.puntos1Base + this.puntos1Sesion),
      puntos2: (this.puntos2Base + this.puntos2Sesion),
      puntos3: (this.puntos3Base + this.puntos3Sesion)
    }
    this.miHttp.post('http://localhost/api/sumarPuntos', datos)
      .toPromise()
      .then(data => {
        console.log(data)
      })
  }
}
