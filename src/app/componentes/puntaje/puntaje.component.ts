import { Component, OnInit } from '@angular/core';
import { JugadorService } from '../../servicios/jugador.service';
import { Http } from '@angular/http';
import { ChartModule } from 'primeng/chart';
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

  apodos: string[] = [];
  juego1: number[] = [];
  juego2: number[] = [];
  juego3: number[] = [];
  visibleRanking: boolean = false;

  data: any;
  data2: any;

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

  GraficarRanking() {
    //////////////
    this.visibleRanking = true;
    ////////////////////
    this.jugadores.forEach(element => {
      this.apodos.push(element.apodoJugador)
    });
    console.log("apodos para grafico: " + this.apodos);
    //////////////////////
    this.jugadores.forEach(element => {
      this.juego1.push(element.puntos1)
    });
    console.log("puntos1 para grafico: " + this.juego1);
    //////////////////////
    this.jugadores.forEach(element => {
      this.juego2.push(element.puntos2)
    });
    console.log("puntos2 para grafico: " + this.juego2);
    //////////////////////
    this.jugadores.forEach(element => {
      this.juego3.push(element.puntos3)
    });
    console.log("puntos3 para grafico: " + this.juego3);
    //////////////////////

    /////////////////
    this.data = {
      labels: ['utn45', 'niko 12	', 'jp1124	', 'jugador 1	', 'el10	', 'pity	', '22'],
      datasets: [
        {
          label: 'Adivina',
          backgroundColor: '#42a5f5',
          borderColor: '#1E88E5',
          data: [11, 4, 45, 62, 11, 1, 4]
        },
        {
          label: 'Piedra Papel Tijera',
          backgroundColor: '#f5b942',
          borderColor: '#1E88E5',
          data: [44, 12, 12, 19, 10, 6, -1]
        },
        {
          label: 'Trivia simpson',
          backgroundColor: '#4742f5',
          borderColor: '#1E88E5',
          data: [54, 7,5, 38, 12, 7, 4]
        }
      ]
    }
    ////////////////////
  }

  GraficarIndividual() {
    this.data2 = {
      labels: ['Adivina', 'Piedra Papel Tijera', 'Trivia simpson'],
      datasets: [
        {
          data: [this.puntos1Base + this.puntos1Sesion, this.puntos2Base + this.puntos2Sesion, this.puntos3Base],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };
  }
}
