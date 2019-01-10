import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UsersService } from '../../../../services/users.service';

@Component({
	selector: 'app-sub-page-dashboard',
	templateUrl: './sub-page-dashboard.component.html',
	styleUrls: ['./sub-page-dashboard.component.scss']
})
export class SubPageDashboardComponent implements OnInit {

	constructor(
		private titleService: Title,
		public usersService: UsersService
	) { }

	ngOnInit() {
		this.titleService.setTitle('Smile | Dashboard');
		console.log(this.usersService.ActiveUser);
	}

}
