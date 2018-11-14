import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { ApiServiceService } from '../services/api-service.service';
import { UsersService } from '../services/users.service';
import { User } from '../models/user';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(
		private authenticationSerivce: AuthenticationService,
		private APIService: ApiServiceService,
		private usersService: UsersService,
		private _route: ActivatedRoute,
		private _router: Router
	) {}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		if (localStorage.getItem('token')) {
			this.APIService.UserAuth().subscribe(res => {
				if (res.status !== 'success') {
					this.authenticationSerivce.invalidateUser();
				} else {
					this.usersService.ActiveUser = new User(res.data);
				}
			});
			return true;
		} else {
			this._router.navigate(['/'], { queryParams: { invalid: '1' }});
			return false;
		}
	}

}