import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';
import { NavService } from '../../../services/nav.service';
import { CheckinsService } from '../../../services/checkins.service';
import { SubPage } from '../../../classes/abstract/page.class';
import { UsersService } from '../../../services/users.service';
import { NotificationsService } from '../../../services/notifications.service';
import { environment } from '../../../../environments/environment.prod'
import { SwPush } from '@angular/service-worker';

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
		private notificationService: NotificationsService,
		private swPush: SwPush
	) { super(); }

	@HostListener('document:click', ['$event']) clickedOutside($event){
		this.navService.MobileMenu = false;
	}

	ngOnInit() {	
		this.authenticationService.AuthenticateUser()
		.then(data => {
			if (this.usersService.ActiveUser.role == 'client') {
				const DateObject = new Date;
				const date = DateObject.getFullYear() + '-' + (DateObject.getMonth() + 1) + '-' + DateObject.getUTCDate();
				this.checkinService.getUserDateCheckins(this.usersService.ActiveUser.id, date)
				.subscribe(results => {
					if (!results.data.length) {
						this.checkinService.checkinDone = false;
						this.notificationService.newNotify('warning', 'You have not done your Check in today');
					}
				})
			}
		})
		.catch(err => {
			this.failure = true;
		})
		this.swPush.requestSubscription({ serverPublicKey: environment.VAPID_PUBLIC_KEY })
		.then(sub => {
			this.usersService.subscribeUser(JSON.stringify(sub)).subscribe(data => {}, err => {})
		})
		.catch(err => {
			this.failure = true;
		});
	}
	
	clickedInside($event: Event){
		$event.preventDefault();
		$event.stopPropagation();
	}
}
