import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { UsersService } from '../../../services/users.service';
import { NavService } from '../../../services/nav.service';

@Component({
	selector: 'app-element-nav-dashboard',
	templateUrl: './element-nav-dashboard.component.html',
	styleUrls: ['./element-nav-dashboard.component.scss']
})
export class ElementNavDashboardComponent implements OnInit {
	logo: String = 'assets/images/logo-wide-gradient.png';

	constructor(
		public authenticationService: AuthenticationService,
		public usersService: UsersService,
		public navService: NavService
	) { }

	ngOnInit() {
	}

}
