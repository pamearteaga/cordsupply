import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../../interfaces/user';



@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private angularFirestore: AngularFirestore
  ) { }

  async createUser(data: User): Promise<any> {
    try {
      const newUser = await this.angularFirestore.firestore.collection('users').add(data);
      return newUser.id;
    } catch (error) {
      /* return error; */
    }
  }

 /*  getUser(uid: string) {
    try {
      this.angularFirestore.firestore.collection('users').where('uid', '==', uid).get().then( resp => {
        resp.forEach( usuarios => {            
          console.log('nombre usuario', usuarios.data().name, usuarios.data().lastname);
        });
      });
    } catch (error) {
      console.log('error firestore', error);
    }
  } */

  /* getAllUser() {
    this.angularFirestore.firestore.collection('users').get().then( resp => {
      resp.forEach( usuarios => {
        console.log('todos usuarios', usuarios.data());
      });
    });
  } */

}
