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
	filterString: String = ''
	constructor(
		public titleService: Title,
		public usersService: UsersService,
		public _router: Router,
	) { super(); }

	ngOnInit() {
		this.titleService.setTitle('Smile | Users');
		if (!this.usersService.Users.length) {
			this.loading = true;
			this.usersService.getUsers().subscribe(data => {
				this.loading = false;
				if (data.status == "success") {
					this.success = true;
					for (const user of data.data)
						this.usersService.Users.push(new User(user));
				}
			})
		} else {
			for (const user of this.usersService.Users){
				user.visible$.next(true);
			}
		}
	}

	filterUsers(event: any) {
		for (const user of this.usersService.Users) {
			if (!user.first_name.toLowerCase().includes(this.filterString.toLowerCase()) &&
			  !user.last_name.toLowerCase().includes(this.filterString.toLowerCase()) &&
			  !user.username.toLowerCase().includes(this.filterString.toLowerCase()) &&
			  !user.email.toLowerCase().includes(this.filterString.toLowerCase())) 
			  {
				  user.visible$.next(false);
			} else {
				user.visible$.next(true);
			}
		}
	}
	routeToUser(user: User) {
		this._router.navigate(['/dashboard/user/'+user.username]);
	}
}
