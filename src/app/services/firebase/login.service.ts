import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 /*  errorLogin: boolean;
  messageError: string; */


  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }

  async login( email: string, password: string ) {
    try {
      const respuesta = await this.angularFireAuth.auth.signInWithEmailAndPassword( email, password );
      console.log('auth -->', respuesta);
      /* return respuesta.user.uid; */
      /* this.errorLogin = false; */
    } catch (error) {
      console.error('auth -->', error.message);
      return error;
      /* this.errorLogin = true;
      this.messageError = error.message; */
    }
  }

  async logout() {
    try {
      await this.angularFireAuth.auth.signOut();
    } catch (error) {
    }
  }

 async currentUser() {
    try {
      const currentUser = this.angularFireAuth.auth.currentUser;
      return currentUser;
    } catch (error) {
      return error;
    }
  }

}
