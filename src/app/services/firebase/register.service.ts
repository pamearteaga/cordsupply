import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }

  async registerByUserEmail( email: string, password: string) {
    try {
      const respuestaReg = await this.angularFireAuth.auth.createUserWithEmailAndPassword( email, password );
      return respuestaReg.user;
    } catch (error) { 
      console.log(error.code);
    }
  }
}
