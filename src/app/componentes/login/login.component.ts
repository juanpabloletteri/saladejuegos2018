import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../servicios/http-service.service';
import { RouterModule, Route, Routes, Router } from '@angular/router';
import { Http } from '@angular/http';
import { JugadorService } from '../../servicios/jugador.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarios: any;
  mail: string;
  pass: string;
  jugador: JugadorService = new JugadorService();

  constructor(public miHttp: HttpServiceService, public rute: Router, public nuevoHttp: Http) {

    this.miHttp.httpGetO('http://localhost/api/traerTodosLosUsuarios')
      .toPromise()
      .then(data => {
        console.log(data);
        this.usuarios = data;
        // console.log( data );
        //return data;
      }, err => {
        console.log(err);
      })
  }

  ngOnInit() {
  }

  Ingresar() {
    this.usuarios.forEach(element => {
      console.log('mail' + this.mail + '  pass: ' + this.pass);
      //console.log('ele mailll' + element.mail + 'ele apodo: ' + element.apodoJugador)
      if (this.mail == element.mail && this.pass == element.password) {
        //alert("seeeeee");
        /*this.nuevoHttp.post('http://localhost/api/traerUsuarioPorId', '{ "id": 1 }')
          .subscribe(data => this.jugador = data.json());
        console.log('a verrrr:' + this.jugador)*/
        /////////////////////
        this.jugador.setId(element.id);
        this.jugador.setNombre(element.nombre);
        this.jugador.setApellido(element.apellido);
        this.jugador.setMail(element.mail);
        this.jugador.setApodoJugador(element.apodoJugador);
        this.jugador.setPuntosBase1(element.puntos1base);
        this.jugador.setPuntosBase2(element.puntos2baseid);
        this.jugador.setPuntosBase3(element.puntos3base);
        /////////////
        this.rute.navigate(['home']);
      } else if (this.mail == element.mail) {
        alert("password incorrecto")
      } else if (this.pass == element.password) {
        alert("mail incorrecto")
      }
    });

  }
}
