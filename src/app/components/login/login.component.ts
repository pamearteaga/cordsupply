import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../../services/firebase/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  texto: any;
  condicional = false;

  /* formulario login */
  public loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  onLogin() {
    console.log('Login', this.loginForm.value);
    this.loginService.login( this.loginForm.value.email, this.loginForm.value.password).then( resp => {
      if (resp !== undefined ) {
        console.log('resp promise compo', resp);
        this.texto = resp.message;
        this.condicional = true;
      } else {
        this.condicional = false;
      }
    }).catch( error => {
      console.error('promise', error);
    });
  }

  onLogout() {
    this.loginService.logout().then( resp => {
      console.log('logout ok');
    }).catch( error => {
      console.error('error logout', error);
    });
  }

}
