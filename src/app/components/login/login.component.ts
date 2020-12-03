import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../../services/firebase/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
      console.log('resp promise compo', resp);
    }).catch( error => {
      console.log('promise', error);
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
