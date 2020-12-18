import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../services/firebase/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  condicional = false;

  /* formulario login */
  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  get emailNoValid() {
    return this.loginForm.controls['email'].invalid && this.loginForm.controls['email'].touched;
  }
  get passwordlNoValid() {
    return this.loginForm.controls['password'].invalid && this.loginForm.controls['password'].touched;
  }

  onLogin() {
    /* validacion de todos los campos en submit */
    if (this.loginForm.invalid) {
      return Object.values(this.loginForm.controls).forEach( control => {
        control.markAsTouched();
      });
    }
    this.loginService.login( this.loginForm.value.email, this.loginForm.value.password).then( resp => {
      if (resp !== undefined ) { 
        this.condicional = true;
      }
    }).catch( error => {
    });

  }

}
