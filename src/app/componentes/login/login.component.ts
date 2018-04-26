import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../servicios/http-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  api = 'http://localhost/api/'

  constructor(public miHttp: HttpServiceService) { }

  ngOnInit() {
  }

  public TraerUsuarios(ruta) {
    return this.miHttp.httpGetO(this.api + ruta)
      .toPromise()
      .then(data => {
        console.log(data);
        // console.log( data );
        return data;
      }, err => {
        console.log(err);
      })



  }
}
