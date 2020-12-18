import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) { }

  async login( email: string, password: string ) {
    try {
      await this.angularFireAuth.auth.signInWithEmailAndPassword( email, password ).then( resp => {
        this.router.navigate(['/supply']);
      });
    } catch (error) {
      return error;
    }
  }

  async logout() {
    try {
      await this.angularFireAuth.auth.signOut();
    } catch (error) {
    }
  }

//Modifique para pbtener el email del usuario
 async currentUser() {
    try {
      const currentUser = this.angularFireAuth.auth.currentUser.email;
      return currentUser;
    } catch (error) {
      return error;
    }
  }

}
