import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) { }

  /* durante el registro del usuario nuevo, se agrega el nombre de usuario displayName */
  async registerByUserEmail( email: string, password: string, name: string) {
    try {
      const respuestaReg = await this.angularFireAuth.auth.createUserWithEmailAndPassword( email, password ).then( resp => {
        const user = this.angularFireAuth.auth.currentUser;
        user.updateProfile({
          displayName: name
        });   
        this.router.navigate(['/supply']);
        return respuestaReg;
      });
    } catch (error) { 
      return error;
    }
  }

}
