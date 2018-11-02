import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { UsersService } from '../../../services/users.service';

@Component({
	selector: 'app-element-nav-dashboard',
	templateUrl: './element-nav-dashboard.component.html',
	styleUrls: ['./element-nav-dashboard.component.scss']
})
export class ElementNavDashboardComponent implements OnInit {
	logo: String = 'assets/images/logo-white.png';
	constructor(
		private authenticationService: AuthenticationService,
		private usersService: UsersService
	) { }

	ngOnInit() {
	}

}
