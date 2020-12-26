import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/firebase/login.service';


@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {

  private logged: boolean;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.loginService.currentUser().then( resp => {
        if ( resp.uid != null ) {
          this.logged = true;
        } else {
          this.logged = false;
          this.router.navigate(['form']);  
        }
        return this.logged;
      }).catch (error => {
        this.logged = false;
        this.router.navigate(['form']);
        return this.logged;
      });
      return this.logged;
  }
  
}
