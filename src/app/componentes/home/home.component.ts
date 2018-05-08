import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  juegos: Object[];

  constructor() {
    this.juegos = [
      { nombre: 'Adivina el numero', imagen: 'adivina', link: '/adivina', color: 'Black' },
      { nombre: 'Piedra Papel Tijera', imagen: 'ppt', link: '/ppt', color: 'White' },
      { nombre: 'Trivia Simpson', imagen: 'juego3', link: '/trivia', color: 'Blue' },
      { nombre: 'Puntaje', imagen: 'puntaje', link: '/puntaje', color: 'Blue' },
      { nombre: 'Acerca de', imagen: 'acercade', link: '/acercade', color: 'Blue' }
    ];
  }

  ngOnInit() {
  }

}
