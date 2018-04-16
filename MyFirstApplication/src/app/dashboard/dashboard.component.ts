import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  logoutUser(){

  	//remove token, when user logout
  	localStorage.removeItem('token');

  	//this navigate the user into login page
  	this.router.navigate(['']);

  }

}
