import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RegisterService } from '../../services/firebase/register.service';
import { FirestoreService } from '../../services/firebase/firestore.service';
import { User } from '../../interfaces/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

   /* formulario register*/
   public registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    name: new FormControl('')
  });

  constructor(
    private registerService: RegisterService,
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {
  }

  onRegister() {
    console.log('try register', this.registerForm.value);
    this.registerService.registerByUserEmail( this.registerForm.value.email, this.registerForm.value.password ).then( resp => {
      const newRegister: User = {
        email: resp.email,
        emailVerified: resp.emailVerified,
        name: this.registerForm.value.name,
        phoneNumber: resp.phoneNumber,
        uid: resp.uid
      };
      this.firestoreService.createUser(newRegister).then( resp => {
        console.log('id new user', resp);
      });
      console.log('register ok?', resp);
    }).catch( error => {
      console.error('register fail', error);
    });
  }
}
