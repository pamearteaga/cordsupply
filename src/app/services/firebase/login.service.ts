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
      /* return error; */
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
    }
  }
  /* Envia de respuesta el nombre del usuario que se agregó al momento de crearlo */
 async userName() {
  try {
    const userName = this.angularFireAuth.auth.currentUser.displayName;
      return userName;
  } catch (error) {
    return '';
  }
}

}
