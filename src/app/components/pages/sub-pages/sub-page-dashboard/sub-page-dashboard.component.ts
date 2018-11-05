import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthenticationService } from '../../../../services/authentication.service';

@Component({
	selector: 'app-sub-page-dashboard',
	templateUrl: './sub-page-dashboard.component.html',
	styleUrls: ['./sub-page-dashboard.component.scss']
})
export class SubPageDashboardComponent implements OnInit {

	constructor(
		private titleService: Title,
		private authenticationService: AuthenticationService
	) { }

	ngOnInit() {
		this.titleService.setTitle('Smile | Dashboard');
		if (localStorage.getItem('token')) {
			this.authenticationService.AuthenticateUser();
		}
	}

}
