import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NotificationsService } from '../../../../services/notifications.service';

@Component({
	selector: 'app-sub-page-dashboard',
	templateUrl: './sub-page-dashboard.component.html',
	styleUrls: ['./sub-page-dashboard.component.scss']
})
export class SubPageDashboardComponent implements OnInit {

	constructor(
		private titleService: Title,
		private activatedRoute: ActivatedRoute,
		private notificationService: NotificationsService
	) { }

	ngOnInit() {
		this.titleService.setTitle('Smile | Dashboard');

		this.activatedRoute.queryParams.subscribe(params => {
			const reauth = params['reauth'];
			if (reauth == 'true') {
				this.notificationService.newNotify('info', 'You are already Signed in');
			}
		});
	}

}
