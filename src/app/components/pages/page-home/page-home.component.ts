import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavService } from '../../../services/nav.service';
import { Router } from '@angular/router';

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
		private _router: Router
	) { }

	ngOnInit() {
		this.titleService.setTitle('Smile | Home');
		if (localStorage.getItem('token')) {
			this.navService.redirectUser('dashboard', 0, {reauth: 'true' ,ref: this._router.url});
		}
	}

}
