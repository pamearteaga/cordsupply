import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.loginService.userName().then( resp => {
      this.userLog = resp; 
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
