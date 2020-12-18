import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../../services/firebase/register.service';
import { FirestoreService } from '../../services/firebase/firestore.service';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  condicional = false;

  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }

  get nameNoValid() {
    return this.registerForm.controls['name'].invalid && this.registerForm.controls['name'].touched;
  }
  get lastnameNoValid() {
    return this.registerForm.controls['lastname'].invalid && this.registerForm.controls['lastname'].touched;
  }
  get emailNoValid() {
    return this.registerForm.controls['email'].invalid && this.registerForm.controls['email'].touched;
  }
  get passwordlNoValid() {
    return this.registerForm.controls['password'].invalid && this.registerForm.controls['password'].touched;
  }

   /* formulario register*/
   public registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  constructor(
    private registerService: RegisterService,
    private firestoreService: FirestoreService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRegister() {
    /* validacion de todos los campos en submit */
    if (this.registerForm.invalid) {
      return Object.values(this.registerForm.controls).forEach( control => {
        control.markAsTouched();
      });
    }
    this.registerService.registerByUserEmail( this.registerForm.value.email, this.registerForm.value.password ).then( resp => {
      const newRegister: User = {
        email: resp.email,
        emailVerified: resp.emailVerified,
        name: this.registerForm.value.name,
        lastname: this.registerForm.value.lastname,
        phoneNumber: resp.phoneNumber,
        uid: resp.uid
      };
      this.firestoreService.createUser(newRegister).then( resp => {
        this.router.navigate(['/supply']);
        if ( resp !== 'auth/email-already-in-use') {
          this.router.navigate(['/supply']);
        } 
      });
    }).catch( error => {
      console.error('register fail', error);
      this.condicional = true;
    });
  }
}
