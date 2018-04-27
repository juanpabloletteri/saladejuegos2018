import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../servicios/http-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public miHttp: HttpServiceService) {

    this.miHttp.httpGetO('http://localhost/api/traerMailsyApodos')
      .toPromise()
      .then(data => {
        console.log(data);
        // console.log( data );
        return data;
      }, err => {
        console.log(err);
      })
  }

  ngOnInit() {
  }

  Ingresar() {

  }
}
