import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import our guard
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
	{
		//whe app starting, it will navigate to login page
		path:'', loadChildren: './login/login.module#LoginModule'

	},
	{
		path:'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', 
		canActivate:[AuthGuard]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
