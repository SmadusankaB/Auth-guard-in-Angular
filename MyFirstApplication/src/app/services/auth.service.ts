import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {

  loggenIn$ = new BehaviorSubject(false);

  constructor() { 

  	if(this.hasToken()){
  		this.setLoggedIn(true);
  	}else{

  		this.setLoggedIn(false);
  	}

  }


  hasToken() : boolean{

  	//chack user has a token
  	if(localStorage.getItem('token')){
  		return true;
  	}else{
  		return false;
  	}

  }

  setLoggedIn(value: boolean){
  	//update loggedin status in loggedIn$ stream. 
  	this.loggenIn$.next(value);
  }



}
