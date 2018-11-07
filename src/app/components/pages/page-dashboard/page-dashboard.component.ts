import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
	selector: 'app-page-dashboard',
	templateUrl: './page-dashboard.component.html',
	styleUrls: ['./page-dashboard.component.scss']
})
export class PageDashboardComponent implements OnInit {

	constructor(
		private activatedRoute: ActivatedRoute,
		private authenticationService: AuthenticationService,
		private router: Router
	) { }

	ngOnInit() {
	}

}
