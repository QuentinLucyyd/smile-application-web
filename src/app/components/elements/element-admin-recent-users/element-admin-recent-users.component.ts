import { Component, OnInit } from '@angular/core';
import { SubPage } from 'src/app/classes/abstract/page.class';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user';

@Component({
	selector: 'app-element-admin-recent-users',
	templateUrl: './element-admin-recent-users.component.html',
	styleUrls: ['./element-admin-recent-users.component.scss']
})
export class ElementAdminRecentUsersComponent extends SubPage implements OnInit {
	Users: Array<User> = [];

	constructor(
		public usersService: UsersService
	) {
		super();
	 }

	ngOnInit() {
		this.loading = true;
		this.usersService.getUsers(10, 0).subscribe(data => {
			this.loading = false;
			this.success = true;
			if (data.status == 'success') {
				for (const user of data.data) {
					this.Users.push(new User(user));
				}
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
