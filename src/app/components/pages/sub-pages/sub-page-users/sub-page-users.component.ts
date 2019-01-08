import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UsersService } from 'src/app/services/users.service';
import { SubPage } from 'src/app/classes/abstract/page.class';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
	selector: 'app-sub-page-users',
	templateUrl: './sub-page-users.component.html',
	styleUrls: ['./sub-page-users.component.scss']
})
export class SubPageUsersComponent extends SubPage implements OnInit {

	constructor(
		private titleService: Title,
		private usersService: UsersService,
		private _router: Router,
	) { super(); }

	ngOnInit() {
		this.titleService.setTitle('Smile | Users');
		if (!this.usersService.Users.length) {
			this.loading = true;
			this.usersService.getUsers().subscribe(data => {
				this.loading = false;
				if (data.status == "success") {
					this.success = true;
					this.usersService.Users = data.data;
				}
			})
		}
	}

	routeToUser(user: User) {
		this._router.navigate(['/dashboard/user/'+user.username]);
	}
}
