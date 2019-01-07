import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { UsersService } from 'src/app/services/users.service';
import { SubPage } from 'src/app/classes/abstract/page.class';

@Component({
	selector: 'app-element-admin-recent-checkins',
	templateUrl: './element-admin-recent-checkins.component.html',
	styleUrls: ['./element-admin-recent-checkins.component.scss']
})
export class ElementAdminRecentCheckinsComponent extends SubPage implements OnInit {
	UsersCheckins: Array<any> = [];

	constructor(
		private APIService: ApiServiceService,
		private usersService: UsersService
	) { super(); }

	ngOnInit() {
		this.usersService.getRecentuserCheckins().subscribe(data => {
			this.loading = true;
			if (data.status == "success") {
				this.success = true
				this.UsersCheckins = data.data;
			}
		}, err => {
			this.loading = false;
			this.failure = true;
		})
	}

	formatDate(date) {
		const displayDate = new Date(date);
		return displayDate.toLocaleDateString();
	}
}
