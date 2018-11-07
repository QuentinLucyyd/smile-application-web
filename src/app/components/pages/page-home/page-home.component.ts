import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavService } from '../../../services/nav.service';
import { Router } from '@angular/router';
import { NotificationsService } from '../../../services/notifications.service';

@Component({
	selector: 'app-page-home',
	templateUrl: './page-home.component.html',
	styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {
	logo: String = 'assets/images/logo-white.png';
	constructor(
		private titleService: Title,
		private navService: NavService,
		private _router: Router,
	) { }

	ngOnInit() {
		this.titleService.setTitle('Smile | Home');
		if (localStorage.getItem('token')) {
			this._router.navigate(['/dashboard'], {queryParams: {reauth: 'true', ref: 'home'}});
		}
	}

}
