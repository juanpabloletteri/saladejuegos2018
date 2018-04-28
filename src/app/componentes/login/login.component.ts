import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../servicios/http-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarios: any;

  constructor(public miHttp: HttpServiceService) {

    this.miHttp.httpGetO('http://localhost/api/traerMailsyApodos')
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
      console.log('ele mailll' + element.mail + 'ele apodo: ' + element.apodoJugador)
    });
  }
}
