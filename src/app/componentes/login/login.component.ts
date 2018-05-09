import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../servicios/http-service.service';
import { RouterModule, Route, Routes, Router } from '@angular/router';
import { Http } from '@angular/http';
import { JugadorService } from '../../servicios/jugador.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarios: any;

  nombre: string;
  apellido: string;
  dni: string;
  mail: string;
  password: string;

  esUsuario: boolean = true;

  constructor(public miHttp: HttpServiceService, public rute: Router,
    public nuevoHttp: Http, private jugador: JugadorService) {

    this.miHttp.httpGetO('http://apitplabo4.esy.es/traerTodosLosUsuarios')
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
      console.log('mail' + this.mail + '  password: ' + this.password);
      //console.log('ele mailll' + element.mail + 'ele apodo: ' + element.apodoJugador)
      if (this.mail == element.mail && this.password == element.password) {
        //alert("seeeeee");
        /*this.nuevoHttp.post('http://apitplabo4.esy.es/traerUsuarioPorId', '{ "id": 1 }')
          .subscribe(data => this.jugador = data.json());
        console.log('a verrrr:' + this.jugador)*/
        /////////////////////
        this.jugador.setId(element.id);
        this.jugador.setNombre(element.nombre);
        this.jugador.setApellido(element.apellido);
        this.jugador.setMail(element.mail);
        this.jugador.setApodoJugador(element.apodoJugador);
        this.jugador.setPuntos1Base(element.puntos1);
        this.jugador.setPuntos2Base(element.puntos2);
        this.jugador.setPuntos3Base(element.puntos3);
        /////////////
        swal(
          'Acceso',
          'Felicidades, Ingreso correcto',
          'success'
        )
        //////////////
        this.rute.navigate(['home']);
      } else if (this.mail == element.mail) {
        swal('Password incorrecto', 'Reintente por favor', 'error')
      } else if (this.password == element.password) {
        swal('Mail incorrecto', 'Reintente por favor', 'error')
      }
    });
  }
  Registrar() {

  }

}
