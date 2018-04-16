import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

//import auth service
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

	loggedInStatus : boolean = false;

	constructor(private authService : AuthService){

	}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

	this.authService.loggenIn$.subscribe(
		(status) => {
			this.loggedInStatus = status;
		});  

	return this.loggedInStatus;	
    
  }
}
