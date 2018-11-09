import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';
import { NavService } from '../../../services/nav.service';
import { CheckinsService } from '../../../services/checkins.service';
import { SubPage } from '../../../classes/abstract/page.class';
import { UsersService } from '../../../services/users.service';
import { NotificationsService } from '../../../services/notifications.service';

@Component({
	selector: 'app-page-dashboard',
	templateUrl: './page-dashboard.component.html',
	styleUrls: ['./page-dashboard.component.scss']
})
export class PageDashboardComponent extends SubPage implements OnInit {

	constructor(
		public navService: NavService,
		private checkinService: CheckinsService,
		private authenticationService: AuthenticationService,
		private usersService: UsersService,
		private notificationService: NotificationsService
	) { super(); }

	ngOnInit() {
		this.authenticationService.AuthenticateUser()
		.then(data => {
			const DateObject = new Date;
			const date = DateObject.getFullYear() + '-' + DateObject.getMonth() + '-' + DateObject.getDay();
			this.checkinService.getUserDateCheckins(this.usersService.ActiveUser.id, date)
			.subscribe(results => {
				if (!results.data.length) {
					this.checkinService.checkinDone = false;
					this.notificationService.newNotify('warning', 'You have not done your Check in today');
				}
			})
		})
		.catch(err => {
			console.log(err);
		})
	}

}
