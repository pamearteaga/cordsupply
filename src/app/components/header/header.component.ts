import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService } from '../../services/firebase/firestore.service';
import { LoginService } from '../../services/firebase/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userLog: any;

  constructor(
    private router: Router,
    private firestoreService: FirestoreService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.loginService.currentUser().then( resp => {
      this.userLog = resp;
      /* console.log(this.userLog) */
      /* const loggedUser = this.firestoreService.getUser(userUid);
      console.log(loggedUser) */
    });

  }

  searchCord( term: string ) {
    this.router.navigate( ['supply/search', term] )
  }

  onLogout() {
    this.loginService.logout().then( resp => {
      this.router.navigate(['/form']);
    }).catch( error => {
      console.error('error logout', error);
    });
  }

}
