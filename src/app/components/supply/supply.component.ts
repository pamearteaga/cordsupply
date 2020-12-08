import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firebase/firestore.service';
import { LoginService } from '../../services/firebase/login.service';


@Component({
  selector: 'app-supply',
  templateUrl: './supply.component.html',
  styleUrls: ['./supply.component.scss']
})
export class SupplyComponent implements OnInit {

  constructor(
    private firestoreService: FirestoreService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    /* this.loginService.currentUser().then( resp => {
      console.log('user logged', resp.uid);
    }); */
    /* this.firestoreService.getUser('dzwAVKyN4mXExP7OkgtiXWGgHoG2'); */
    /* this.firestoreService.getAllUser(); */
  }

  onLogout() {
    this.loginService.logout().then( resp => {
      console.log('logout ok');
    }).catch( error => {
      console.error('error logout', error);
    });
  }

}
