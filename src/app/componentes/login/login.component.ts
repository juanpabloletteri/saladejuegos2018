import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../servicios/http-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarios: any;
  mail: string;
  pass: string;
  constructor(public miHttp: HttpServiceService) {

    this.miHttp.httpGetO('http://localhost/api/traerMailsyPass')
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
        alert("seeeeee")
      } else if (this.mail == element.mail) {
        alert("password incorrecto")
      } else if (this.pass == element.password) {
        alert("mail incorrecto")
      }
    });

  }
}
